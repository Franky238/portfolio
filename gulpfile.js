var gulp = require('gulp');
var conn = require('gulp-connect');

function server() {
    conn.server({
        port: 9000
    });
}

exports.server = server;
