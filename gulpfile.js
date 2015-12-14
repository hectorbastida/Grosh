var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var gutil = require('gulp-util'),
source = require('vinyl-source-stream'),
browserify = require('browserify'),
watchify = require('watchify'),
connect = require('gulp-connect'),
uglify = require('gulp-uglify'),
streamify = require('gulp-streamify'),
debowerify = require("debowerify");

gulp.task('minify-css', function() {
  return gulp.src('./client/css/grosh.base.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify', function () {
    gulp.src('./client/css/grosh.base.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./client/dist'));
});


gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('browse',function(){
	var bundler = watchify(browserify({
		entries:['./client/app/grosh.module.js'],
		transform:[debowerify],
		extensions:['.js'],
		debug:true,
		cache:{},
		packageCache:{},
		fullPaths:true
		}));
	function build(file){
		if(file) gutil.log('Recompile'+file);
		return bundler
			.bundle()
			.on('error',gutil.log.bind(gutil,'Browserify Error'))
			.pipe(source('bundle.js'))
			.pipe(streamify(uglify()))
			.pipe(gulp.dest('./client/dist'))
	}
	build()
	bundler.on('update',build)
});

gulp.task('default', ['webserver','browse']);
