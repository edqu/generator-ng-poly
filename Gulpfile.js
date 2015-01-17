'use strict';
var istanbul = require('gulp-istanbul')
  , gulp = require('gulp')
  , mocha = require('gulp-mocha');

gulp.task('test', function (cb) {
  gulp.src([
    '*/*.js',
    '!test/*'
    ])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      gulp.src(['test/*.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});
