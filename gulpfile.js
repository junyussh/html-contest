var gulp = require('gulp'),
    compass = require("gulp-compass"),
    rename = require("gulp-rename"),
    connect = require('gulp-connect'),
    marked = require('gulp-markdown');
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: false,
    tables: true,
    breaks: true,
    pedantic: true,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

gulp.task('server', function() {
    connect.server({
        livereload: true,
    });
});
gulp.task("compass", function() {
    gulp.src('assets/sass/*.scss')
        .pipe(compass({
            config_file: 'config.rb',
            css: 'assets/stylesheets',
            sass: 'assets/sass'
        }))
        .pipe(gulp.dest('assets/stylesheets'))
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('assets/stylesheets'))
        .pipe(connect.reload());
});
gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(connect.reload());
});
gulp.task("marked", function() {
    return gulp.src('sources/*.md')
        .pipe(marked())
        .pipe(rename(function(path) {
            path.extname = ".html";
        }))
        .pipe(gulp.dest('posts'))
});

gulp.task('watch', function() {
    gulp.watch('assets/sass/*.scss', ['compass']);
    gulp.watch('*.html', ['html']);
    gulp.watch('post/*.md', ['marked']);
});

gulp.task('default', ['server', 'watch', 'compass', "marked"]);
