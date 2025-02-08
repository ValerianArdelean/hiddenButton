function createButtons(totalButtons) {

	totalButtons = parseInt(totalButtons);
	if (isNaN(totalButtons) || totalButtons < 0) {
		alert("Invalid input: Please provide a positive number.");
		return;
	}

	const buttonsContainerElement = document.getElementById("buttons-container");
	buttonsContainerElement.replaceChildren();

	const winningButtonId = (Math.floor(Math.random() * totalButtons)) + 1;

	for (let i = 1; i <= totalButtons; ++i) {
		const button = document.createElement("button");
		button.id = i.toString();
		button.textContent = i === winningButtonId ? "winner" : "loser";
		button.onclick = () => changeClass(button);
		button.classList.add("button", "hide");
		buttonsContainerElement.appendChild(button);
	}
}

function changeClass(button) {
	button.classList.remove("hide");
	button.classList.add("reveal");
}

createButtons(3);
