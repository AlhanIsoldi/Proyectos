const { series, src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-dart-sass');
const imagemin = require ('gulp-imagemin');
const notify = require ('gulp-notify');
const webp = require ('gulp-webp');
const concat = require('gulp-concat');

//Utilidades css
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//Utilidades js

const terser = require('gulp-terser-js');
const rename = require('gulp-rename');


// Rutas
const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js:'src/js/**/*.js',
}

//Aplica SASS al archivo css y luego lo exporta
//cssnano reduce el tamaño del archivo
//sourcemaps crea un mapa para el css reducido
function css(){
    return src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer, cssnano]))
    .pipe(sourcemaps.write('.'))
    .pipe( dest('./build/css') )
}

//Minificar js

function javascript() {
    return   src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix:'.min'}))
    .pipe(dest('./build/js'))
}
//Reduce el tamaño de las imagenes
function imagenes() {
    return src(paths.imagenes)
    .pipe ( imagemin() )
    .pipe(dest( './build/img'))
    .pipe( notify({message:'Imagen minificada'}));
}
//Convierte las imagenes a webp
function versionWebp(){
    return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest('./build/img'))
    .pipe( notify({message:'Imagen webp lista'}));
}
//Guarda los cambios que se hacen en archivos .scss o .js
function watchArchivos(){
    watch(paths.scss, css);
    watch(paths.js, javascript);
}

exports.css = css;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series( css, javascript, imagenes, versionWebp, watchArchivos);

