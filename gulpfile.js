const gulp = require("gulp");
var imageResize = require("gulp-image-resize");

function minmalizeImage(cb) {
  gulp
    .src("source/images/*.jpg")
    .pipe(
      imageResize({
        width: 500,
        height: 500,
        crop: true,
        upscale: false
      })
    )
    .pipe(gulp.dest("dist/images"));

  cb();
}

exports.default = minmalizeImage;
