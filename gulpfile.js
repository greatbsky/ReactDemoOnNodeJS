var gulp = require('gulp');
var mocha = require('gulp-mocha');
var del = require('del');
var tar = require('gulp-tar');
var gzip = gzip = require('gulp-gzip');

//清理
gulp.task('clean', function() {
    return del(['./bin/logs/*', './logs/*', './target/*']).then(paths => {
        console.log('Deleted files:\n', paths.join('\n'));
    });
});

// 测试
gulp.task('test', function () {
    return gulp.src(['src/test/*Test.js', 'src/test/*/*Test.js'], { read: false })
        .pipe(mocha({reporter: 'nyan'}));
});

// 打包
gulp.task('package', function () {
    return gulp.src(['bin/*.js', 'public/**', 'src/main/**', 'src/resources/**', 'node_modules/**'], { base: './' })
        .pipe(tar('proj-im-notify.tar'))
        .pipe(gzip())
        .pipe(gulp.dest('target'));
});

// 注册缺省任务
gulp.task('default', ['clean', 'test', 'package']);