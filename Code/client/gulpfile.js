// Configuration des processus src => dist

// Import de package
const gulp = require("gulp");
// plugin gulp pour typescript
// npm i gulp-typescript typescript
const ts = require('gulp-typescript');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

const staticFilesPath = "./src/**/*.(html|json)"
const tsFilesPath = "./src/**/*.ts";
const jsFilesPath = "./src/**/*.js";
const scssFilesPath = "./src/**/*.scss";

const uglify = require("gulp-uglify");


// export 
function StaticFiles() {
    return gulp.src(staticFilesPath)
        // pipe => fait une action sur les fichiers en amont
        // copie dans un dossier
        .pipe(gulp.dest("./dist"));
}

// Création d'un compilateur basé sur tsconfig.json
let tsProject = ts.createProject('./tsconfig.json');
// export de la fonction de compilation des .ts
function TsFiles() {
    return gulp.src(tsFilesPath)
        .pipe(sourcemaps.init())
        // pipe => fait une action sur les fichiers en amont
        // copie dans un dossier
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./dist"));
}

function JsFiles() {
    return gulp.src(jsFilesPath)
        .pipe(sourcemaps.init())
        // pipe => fait une action sur les fichiers en amont
        // copie dans un dossier
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./dist"));
}

// compilation scss et minification
function ScssFiles() {
    return gulp.src(scssFilesPath)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'));
};



// Fonction qui surveille les fichiers et exécute la fonction de maj des fichiers concernés
function watch() {
    gulp.watch(staticFilesPath, StaticFiles);
    gulp.watch(scssFilesPath, ScssFiles);
    gulp.watch(tsFilesPath, TsFiles);
    gulp.watch(jsFilesPath, JsFiles);
}

// npx gulp TsFiles => exécution du traitement défini dans la fonction TsFiles
exports.TsFiles = TsFiles;
exports.HtmlFiles = StaticFiles;
exports.ScssFiles = ScssFiles;
exports.JsFiles=JsFiles;
exports.Watch = watch;
// npx gulp
exports.default = gulp.series(gulp.parallel(TsFiles, ScssFiles, StaticFiles, JsFiles), watch);

