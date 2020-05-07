const $content = document.querySelector(".content");
const $contentTech = document.querySelector(".content-tech");

$content.addEventListener("click", e => {
	for (let i = 0; i < $contentTech.children.length; i++) {
		if ((e.target.parentNode.id || e.srcElement.id) === $content.children[i].id) {
			$content.className += " hidden";
			$contentTech.children[i].classList.remove("hidden");
		}
	}
});
