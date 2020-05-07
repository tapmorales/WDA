const $content = document.querySelector(".content");

const contentId = ["html5", "css3", "js", "node", "npm", "sass", "gulp", "rollup", "webpack"];

for (let i = 0; i < contentId.length; i++) {
	let div = document.createElement("div");
	div.className = "content__item";
	div.id = contentId[i] + "-content";
	$content.appendChild(div);
	let img = document.createElement("img");
	$content.children[i].appendChild(img);
	$content.children[i].children[0].setAttribute("src", "../img/" + contentId[i] + "-logo.png");
}
