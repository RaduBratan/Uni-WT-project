const { src, dest, watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync");
const connect = require("gulp-connect");
const del = require("del");
const nodemon = require("gulp-nodemon");
const postCSS = require("gulp-postcss");
const SCSS = require("gulp-sass")(require("sass"));
const sync = browserSync.create();
const uglifyCSS = require("gulp-clean-css");
const uglifyHTML = require("gulp-htmlmin");
const uglifyJS = require("gulp-terser");

const target = "dist";

function clean() {
	return del("dist");
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

function homeJS() {
	return src("src/scripts/views/home.js")
		.pipe(uglifyJS())
		.pipe(dest(`${target}/scripts/views`))
		.pipe(connect.reload());
}

function developerJS() {
	return src("src/scripts/views/developer.js")
		.pipe(uglifyJS())
		.pipe(dest(`${target}/scripts/views`))
		.pipe(connect.reload());
}

function projectsJS() {
	return src("src/scripts/views/projects.js")
		.pipe(uglifyJS())
		.pipe(dest(`${target}/scripts/views`))
		.pipe(connect.reload());
}

function aboutJS() {
	return src("src/scripts/views/about.js")
		.pipe(uglifyJS())
		.pipe(dest(`${target}/scripts/views`))
		.pipe(connect.reload());
}

function contactJS() {
	return src("src/scripts/views/contact.js")
		.pipe(uglifyJS())
		.pipe(dest(`${target}/scripts/views`))
		.pipe(connect.reload());
}

function routerJS() {
	return src("src/scripts/router.js")
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

function server(cb) {
	sync.init(null, {
		proxy: "http://localhost:5000",
		open: true,
		files: ["dist/"],
		port: 5000,
		notify: false
	});
	cb();
}

/* function server(cb) {
	connect.server({
		root: "dist",
		port: 3000,
		livereload: true,
		fallback: target + "/index.html"
	});
	cb();
} */

function net(cb) {
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
}

function watchers(cb) {
	watch("src/index.html", indexHtml);
	watch("src/styles/index.scss", indexCSS);
	watch("src/styles/noscript/index.noscript.scss", indexNoscriptCSS);
	watch("src/scripts/router.js", routerJS);
	watch("src/scripts/views/home.js", homeJS);
	watch("src/scripts/views/developer.js", developerJS);
	watch("src/scripts/views/projects.js", projectsJS);
	watch("src/scripts/views/about.js", aboutJS);
	watch("src/scripts/views/contact.js", contactJS);
	watch("src/assets/*.ttf", fonts);
	watch("src/assets/*.png", images);
	cb();
}

const build = series(
	clean,
	parallel(
		indexHtml,
		indexCSS,
		indexNoscriptCSS,
		routerJS,
		homeJS,
		developerJS,
		projectsJS,
		aboutJS,
		contactJS,
		fonts,
		images,
		net
	)
);

const start = series(
	build,
	parallel(
		server,
		watchers
	)
);

exports.default = build;
exports.start = start;
