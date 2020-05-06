const $doctype = document.getElementById("doctype");
const $content = document.querySelector(".content");

console.log($content);
console.log($content.innerHTML);

$content.addEventListener("click", function (event) {
	let targetElement = event.target;
	if (targetElement.innerText === "<!DOCTYPE html>") {
		$content.innerHTML = `
				<div class="menu">
					<ul>
						<li>Início</li>
						<li>Sobre</li>
						<li>Contato</li>
					</ul>
				</div>
			`;
	}
});
