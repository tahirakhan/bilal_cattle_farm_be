var gulp = require('gulp');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files'),
    es = require('event-stream'),
	less = require('gulp-less');

gulp.task('default', function() {
  // place code for your default task here
});



var paths = {
    index : './index.html',
	sources : ['./resources/app/*.js', './resources/css/*.css','./resources/js/bootstrap/dist/css/bootstrap.css'],
	dest : './dest'
};

gulp.task('inject-own', function() {
	
    var cssFiles = gulp.src(paths.index)
        .pipe(inject(gulp.src(paths.sources, {read: false})))
        .pipe(gulp.dest(paths.dest));
	
		
		gulp.src(paths.index)
	   .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
	   .pipe(inject(es.merge(
		cssFiles,
		gulp.src(paths.sources, {read: false})
		)))
		.pipe(gulp.dest(paths.dest));
		
});
