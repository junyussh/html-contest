var gulp = require('gulp'),
    compass = require("gulp-compass"),
    minifyCSS = require('gulp-cssnano'),
    rename = require("gulp-rename"),
    connect = require('gulp-connect');

gulp.task('server', function() {
    connect.server({
        livereload: true,
    });
});
gulp.task("minifyCSS", ['compass'], function() {
    return gulp.src('assets/stylesheets/style.css')
    	.pipe(minifyCSS())
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('assets/stylesheets'));
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
        .pipe(minifyCSS())
        .pipe(gulp.dest('assets/stylesheets'))
        .pipe(connect.reload());
});
gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('assets/sass/*.scss', ['compass']);
    gulp.watch('*.html', ['html']);
});

gulp.task('default', ['server', 'watch', 'compass']);
