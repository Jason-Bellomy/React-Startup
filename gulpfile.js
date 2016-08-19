"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // runs local webserver
var open = require('gulp-open'); // opens url in web browser
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var esLint = require('gulp-eslint');
var deploy = require('gulp-gh-pages');

var config = {
    port: 8080,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/font-awesome/css/font-awesome.min.css'
        ],
        icons: [
            'node_modules/font-awesome/fonts/*'
        ],
        mainJs: './src/main.js',
        dist: './dist'
    }
};

//Start a local development server
gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    })
});

gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + "/scripts"))
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + "/css"));
});

gulp.task('icons', function() {
    return gulp.src(config.paths.icons)
    .pipe(gulp.dest(config.paths.dist + '/fonts'));
});

gulp.task('eslint', function() {
    return gulp.src(config.paths.js)
               .pipe(esLint({config: 'eslint.config.json'}))
               .pipe(esLint.format());
});
gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'eslint']);
});

gulp.task('default', ['html', 'js', 'css', 'icons', 'eslint', 'open', 'watch']);

gulp.task('deploy', function () {
    return gulp.src("./dist/**/*")
    .pipe(deploy())
});