const $content = document.querySelector(".content");

const $contentHtml = document.querySelector(".content-html");
const $contentCss = document.querySelector(".content-css");
const $contentJs = document.querySelector(".content-js");
const $contentNode = document.querySelector(".content-node");
const $contentNpm = document.querySelector(".content-npm");
const $contentSass = document.querySelector(".content-sass");
const $contentGulp = document.querySelector(".content-gulp");
const $contentRollup = document.querySelector(".content-rollup");
const $contentWebpack = document.querySelector(".content-webpack");

const contentClick = [
	$contentHtml,
	$contentCss,
	$contentJs,
	$contentNode,
	$contentNpm,
	$contentSass,
	$contentGulp,
	$contentRollup,
	$contentWebpack,
];

$content.addEventListener("click", function (e) {
	$content.className += " hidden";

	for (let i = 0; i < contentClick.length; i++) {
		if (e.target.parentNode.id === $content.children[i].id) {
			contentClick[i].classList.remove("hidden");
		}
	}
});
