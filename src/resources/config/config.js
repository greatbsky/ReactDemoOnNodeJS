'use strict';

/**
 * 全局配置文件
 * @author Architect.bian
 */

module.exports = {
    port: 9001,
    view: {
        model:{
            base: "",
            basejs: "",
            basecss: "",
            baseimg: "",
            basefile: "",
            webdata: ""
        }
    },
    web: {
        staticRegexs : [/^\/js\/.*/i, /^\/css\/.*/i, /^\/imgs\/.*/i, /.*\.ico$/i, /.*\.js$/i, /.*\.css$/i, /.*\.html$/i]
    },
    sys: {

    },
    db: {

    },
    cache: {
        redis: {
            url: "redis://192.168.1.98:6379",
            options: {}
        }
    },
    socket: {
        port: 3010,
        namespace: '/notify',
        projects: ['proj000000uid', 'proj111111uid']
    }
}