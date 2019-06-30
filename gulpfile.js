'use strict'

// https://gulpjs.com/docs/en/api/series
// https://stackoverflow.com/questions/29511491/running-a-shell-command-from-gulp

const { series } = require('gulp');
const { exec } = require('child_process');

exports.build = series(function flowTyped (cb) {
  exec('npm run flow-typed', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}, function build (cb) {
    exec('npm run build', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
});
