/**
 * immediate client即时客户端
 */
;function IMClient(host, uid, opts) {
    var defaultOpts = {
        onConnect: onConnectHandler,
        onDisconnect: onDisconnectHandler
    };
    opts = opts || defaultOpts;
    var url = "http://" + host + "/notify/" + uid;
    var socket = io.connect(url);
    socket.on('connect', opts.onConnect);
    socket.on('disconnect', opts.onDisconnect);

    /*------socket自定义方法--------*/
    /**
     * 监听什么room,可以有多个room如uid000,uid001,uid002等
     * @param room
     */
    socket.listen = function(room) {
        socket.emit('listen', room, function(data) {
            if(data.success) {
                //save room into json
                socket.listen.rooms[room] = true;
                //console.log(socket.listen.rooms);
            } else {
                console.error("error listen " + room);
            }
        });
    };

    socket.listen.rooms = {};

    /*------默认方法--------*/
    function onConnectHandler() {
        console.log("connected ...");
        //循环socket.listen.rooms 执行listen方法
        reListen();
    }

    function onDisconnectHandler(){
        console.log("disconnect");
    }

    /* 重新调用listen方法*/
    function reListen() {
        for (var k in socket.listen.rooms) {
            if (socket.listen.rooms[k]) {
                socket.listen(k);
            }
        }
    }

    return socket;
};
