const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();
const gulpWebpack = require('webpack-stream');

const paths = {
    root: './build',
    templates: {
        pages: 'src/pug/*.pug',
    },
    styles: {
        src: 'src/css/*.scss',
        dest: 'build/assets/css'
    },
    scrypts: {
        src: 'src/js/*.js',
        dest: 'build/assets/js',
        json: 'src/js/*.json'
    }
}
//move json
function json () {
    return gulp.src(paths.scrypts.json)
        .pipe(gulp.dest(paths.root))
}
//convert pug
function html () {
    return gulp.src(paths.templates.pages)
        .pipe(pug({pretty:true}))
        .pipe(gulp.dest(paths.root));
};
// convert sass
function css(){
    return gulp.src('./src/css/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(paths.styles.dest))
};
// clean
function clean(){
    return del(paths.root);
};
//gulp watcher
function watch(){
    gulp.watch(paths.styles.src, css);
    gulp.watch(paths.templates.pages, html);
    gulp.watch(paths.scrypts.src, scrypts);
    gulp.watch(paths.scrypts.src, json);

}
//local host + livereload
function server(){
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}
function scrypts () {
    return gulp.src(paths.scrypts.src)
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest(paths.scrypts.dest));
  }
exports.server = server;
exports.html = html;
exports.css = css;
exports.clean = clean;
exports.scrypts = scrypts;
exports.json = json;

gulp.task('default', gulp.series(
    gulp.parallel(server)
));
