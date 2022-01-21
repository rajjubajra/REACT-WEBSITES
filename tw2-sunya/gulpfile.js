const {src, dest, watch, series} = require('gulp');

/**
 * 
 * Move Files and Folder from 
 * 'build' folder to 'Hosting'
 * run - 'gulp'
 */

function moveFiles(){
  return src('./build/**/*.*')
  .pipe(dest('../tw2-sunya-hosting'))
}

function watchTask(){
  watch('./build/*.*');
}

//default gulp
exports.default = series(moveFiles, watchTask);