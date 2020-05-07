var $content__item = document.querySelectorAll(".content__item");
var $content = document.querySelector(".content");
var $contentHtml = document.querySelector(".content-html");
var $contentCss = document.querySelector(".content-css");
var $contentJs = document.querySelector(".content-js");
var $contentNode = document.querySelector(".content-node");
var $contentNpm = document.querySelector(".content-npm");
var $contentSass = document.querySelector(".content-sass");
var $contentGulp = document.querySelector(".content-gulp");
var $contentRollup = document.querySelector(".content-rollup");
var $contentWebpack = document.querySelector(".content-webpack");

$content.addEventListener("click", function (e) {
	$content.className += " hidden";
	if (e.target.parentNode.id === "html5-content") {
		$contentHtml.classList.remove("hidden");
	}
	if (e.target.parentNode.id === "css3-content") {
		$contentCss.classList.remove("hidden");
	}
	if (e.target.parentNode.id === "js-content") {
		$contentJs.classList.remove("hidden");
	}
	if (e.target.parentNode.id === "node-content") {
		$contentNode.classList.remove("hidden");
	}
	if (e.target.parentNode.id === "npm-content") {
		$contentNpm.classList.remove("hidden");
	}
	if (e.target.parentNode.id === "sass-content") {
		$contentSass.classList.remove("hidden");
	}
	if (e.target.parentNode.id === "gulp-content") {
		$contentGulp.classList.remove("hidden");
	}
	if (e.target.parentNode.id === "rollup-content") {
		$contentRollup.classList.remove("hidden");
	}
	if (e.target.parentNode.id === "webpack-content") {
		$contentWebpack.classList.remove("hidden");
	}
});
