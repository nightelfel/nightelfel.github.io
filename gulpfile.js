var gulp = require('gulp');
var template = require('gulp-template-compile');
var concat = require('gulp-concat');

gulp.task('default', function () {
    gulp.src('htmlTemplates/*.html')
        .pipe(template({
            name: function (file) {
                var temp = file.relative;
                temp = temp.substring(0, temp.length-5);
                return temp;
            },
            namespace: "template",
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('js/'));
})