const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const babel = require('gulp-babel');
const del = require('del');
const argv = require('yargs').argv;

const inputDir = getInputDirectory(argv);
const outputDir = getOutputDirectory(argv);

function getInputDirectory(argv) {
  if (argv.input) {
    return argv.input;
  }
  return '.';
}

function getOutputDirectory(argv) {
  if (argv.output) {
    return argv.output;
  }
  return 'babel-output';
}

// Gulp tasks definition
gulp.task('default', ['test']);

gulp.task('test', ['babel'], () => gulp.src([`${outputDir}/*/*.spec.js`])
    .pipe(jasmine()));

gulp.task('babel', () => gulp.src([`${inputDir}/*/*.js`, `${inputDir}/*/lib/*.js`])
    .pipe(babel())
    .pipe(gulp.dest(outputDir)));

gulp.task('clean', (cb) => {
  del([outputDir], cb);
});
