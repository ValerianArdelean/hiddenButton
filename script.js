function createButtons(size) {
	let n = 3;
	if (!isNaN(size) && size > 0 && size < 10000) {
		n = size;
	}
	
	let winner = Math.floor(Math.random() * n) + 1;
	
	let buttonContainer = document.getElementById('buttons-container');
	buttonContainer.innerHTML = "";
	
	for (let i = 1; i <= n; ++i) {
		let button = document.createElement("button");
		button.classList.add("button", "hide");
		button.id = i;
		button.innerText = "looser";
		if (i == winner) {
			button.innerText = "winner";
		}
		button.setAttribute("onclick", "changeClass(this.id)");
		buttonContainer.appendChild(button);
	}
}

createButtons();

function changeClass(id) {
	let button = document.getElementById(id);
	button.classList.replace("hide", "reveal");
}

