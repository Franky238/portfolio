var gulp = require('gulp');
var conn = require('gulp-connect');

gulp.task('server', function () {
    conn.server({
        port: 9000
    });
});


/**************************************************
 *      TASKS OF TASKS
 **************************************************/

gulp.task('default', ['server']);