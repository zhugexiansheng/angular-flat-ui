var gulp = require('gulp'),
	less = require('gulp-less'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	minify = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sequence = require('gulp-sequence');

//清理里面的无用文件
gulp.task('clean:css', function(){
	return gulp.src("dist/css/*", { read : false })
		.pipe(clean());
});

gulp.task('less:switch', function(){
	return gulp.src('src/less/flat-switch.less')
		.pipe(less())
		.pipe(gulp.dest('dist/switch/css/'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minify())
		.pipe(gulp.dest('dist/switch/css/'));
});

gulp.task('less:slider', function(){
	return gulp.src('src/less/flat-slider.less')
		.pipe(less())
		.pipe(gulp.dest('dist/slider/css/'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minify())
		.pipe(gulp.dest('dist/slider/css/'));
});

gulp.task('mincss:radiocheck', function(){
	return gulp.src("dist/radiocheck/_all.css")
		.pipe(minify())
		.pipe(rename({ suffix: '.min' }))		
		.pipe(gulp.dest('dist/radiocheck/'));
});

gulp.task('minjs:switch', function(){
	return gulp.src('src/switch/*.js')
		.pipe(concat('an-switch.js'))
		.pipe(gulp.dest('dist/switch/js/'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('dist/switch/js/'));
});

gulp.task('minjs:slider', function(){
	return gulp.src('src/slider/*.js')
		.pipe(concat('an-slider.js'))
		.pipe(gulp.dest('dist/slider/js/'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('dist/slider/js/'));
});

gulp.task('minjs:radiocheck', function(){
	return gulp.src('src/radiocheck/*.js')
		.pipe(concat('an-radiocheck.js'))
		.pipe(gulp.dest('dist/radiocheck'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('dist/radiocheck'));
});

gulp.task('all:css', function(){
	return gulp.src(['dist/*/css/*.css','dist/*/*.css'])
		.pipe(concat('an-form.css'))
		.pipe(gulp.dest('dist/all-form/'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minify())
		.pipe(gulp.dest('dist/all-form/'));
});

gulp.task('anconcat', function(){
	return gulp.src(['src/*/*.js', 'src/an-form.js'])
		.pipe(concat('an-form.js'))
		.pipe(gulp.dest('dist/all-form/js/'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('dist/all-form/js/'));
});

gulp.task('dev:css', sequence(['less:switch', 'less:slider','mincss:radiocheck'], 'all:css'));

gulp.task('dev:js', ['minjs:switch', 'minjs:slider', 'minjs:radiocheck']);

gulp.task('dev', sequence(['minjs:switch', 'minjs:slider', 'minjs:radiocheck'], 'anconcat'));