const gulp = require ('gulp'); //Init gulp
const autoprefixer = require('gulp-autoprefixer'); //Init gulp-autoprefixer
const concat = require ('gulp-concat'); //Init gulp-concat
const spritesmith = require ('gulp.spritesmith');   //создание спрайтов
const merge = require ('merge-stream'); // подключение merge-stream

// Gulp-autoprefixer
gulp.task('autoprefixer', function () {
    gulp.src('source/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
});
// Gulp-concat
gulp.task('concat-css', function () {
    gulp.src([
        'app/css/fonts.css',
        'app/css/reset.css',
        'app/css/components/*.css',
        'app/css/pages/*.css'
    ])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('app/css'))
});

// Generate sprite
gulp.task('sprite', function () {
    let spriteData = gulp.src('source/sprite/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css',
            imgPath: '../img/sprite.png'
        }));

    let imgStream = spriteData.img
        .pipe(gulp.dest('app/img'));

    let cssStream = spriteData.css
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('source/css/components'));
    return merge(imgStream, cssStream);
})
// Watch
gulp.task('watch', ['autoprefixer', 'concat-css'], function () {
    gulp.watch('source/css/**/*.css', ['autoprefixer']); //Отслеживаем деррикторию со стилями + запуск автопрефиксера
    gulp.watch('app/css/**/*.css', ['concat-css']); //Отслеживаем деррикторию со стилями и запускаем компиляцию файла style.css
});
// Default task
gulp.task('default', ['watch']);