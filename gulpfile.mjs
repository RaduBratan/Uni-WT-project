// ######## IMPORTS ######## //
// main
import gulp from "gulp";
const { src, dest, watch, series, parallel, task } = gulp;

// browser autoreload
import connect from "gulp-connect";
import browserSync from "browser-sync";
const sync = browserSync.create();

// server
import nodemon from "gulp-nodemon";

// dist deletion
import { deleteAsync } from "del";

// CSS
import uglifyCSS from "gulp-clean-css";
import postCSS from "gulp-postcss";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const SCSS = gulpSass(dartSass);

// HTML
import uglifyHTML from "gulp-htmlmin";

// JS
import uglifyJS from "gulp-terser";

// dist folder
const target = "dist";

// ######## FUNCTIONS ######## //
function clean() {
	return deleteAsync(target);
}

function indexHtml() {
	return src("src/index.html")
		.pipe(uglifyHTML({
			caseSensitive: true,
			decodeEntities: true,
			removeComments: true,
			collapseWhitespace: true
		}))
		.pipe(dest(target))
		.pipe(connect.reload());
}

function indexCSS() {
	return src("src/styles/index.scss")
		.pipe(SCSS())
		.pipe(postCSS())
		.pipe(uglifyCSS({ compatibility: "ie8" }))
		.pipe(dest(`${target}/styles`))
		.pipe(connect.reload());
}

function indexNoscriptCSS() {
	return src("src/styles/noscript/index.noscript.scss")
		.pipe(SCSS())
		.pipe(postCSS())
		.pipe(uglifyCSS({ compatibility: "ie8" }))
		.pipe(dest(`${target}/styles`))
		.pipe(connect.reload());
}

function indexJS() {
	return src("src/scripts/index.js")
		.pipe(uglifyJS())
		.pipe(dest(`${target}/scripts`))
		.pipe(connect.reload());
}

function fonts() {
	return src("src/assets/*.ttf")
		.pipe(dest(`${target}/assets`))
		.pipe(connect.reload());
}

function images() {
	return src("src/assets/*.png")
		.pipe(dest(`${target}/assets`))
		.pipe(connect.reload());
}

/* function server(cb) {
  sync.init(null, {
    proxy: "http://localhost:5000",
    open: true,
    files: ["dist/"],
    port: 5000,
    notify: false
  });
  cb();
} */

function server(cb) {
	connect.server({
		root: "dist",
		port: 3000,
		livereload: true,
		fallback: target + "/index.html"
	});
	cb();
}

/* function netlify(cb) {
  var started = false;
  return nodemon({
    script: "server.js",
    env: { 'NODE_ENV': 'development' }
  }).on("start", function() {
    if (!started) {
      cb();
      started = true;
    }
  });
} */

/* function netlify(cb) {
  if (process.env.NODE_ENV === "production") {
    return src("config/_redirects").pipe(dest(target));
  } else {
    cb();
  }
} */

function watchers(cb) {
	watch("src/index.html", indexHtml);
	watch("src/styles/index.scss", indexCSS);
	watch("src/styles/noscript/index.noscript.scss", indexNoscriptCSS);
	watch("src/scripts/index.js", indexJS);
	watch("src/assets/*.ttf", fonts);
	watch("src/assets/*.png", images);
	cb();
}

task("build", series(
	series(
		clean,
		parallel(
			indexHtml,
			indexCSS,
			indexNoscriptCSS,
			indexJS,
			fonts,
			images
			// netlify
		)
	),
	parallel(
		server,
		watchers
	)
));
