const techClass = ["html", "css", "js", "node", "npm", "sass", "gulp", "rollup", "webpack"];

for (let i = 0; i < techClass.length; i++) {
	let div = document.createElement("div");
	div.className = "content-tech__" + techClass[i] + " hidden";
	$contentTech.appendChild(div);
}
