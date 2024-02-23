let buttonContainer = document.getElementById('buttons-container');
let n = 4;

document.getElementById("Submit").addEventListener("click", function() {
    buttonContainer.textContent = '';
    let submitedValue = parseInt(document.getElementById("n").value);
    for (let i = 0; i < submitedValue; ++i) {
        let button = document.createElement("button");
        button.classList.add("button");
        button.id = i;
        buttonContainer.appendChild(button);
    }
    n = submitedValue;
});

buttonContainer.addEventListener("click", function(event) {
    let number = Math.floor(Math.random() * n);
    for (let i = 0; i < n; ++i) {
        let button = buttonContainer.children[i];
        if (button.id == event.target.id && button.id == number) {
            button.innerText = "winner";
        } else if (button.id == event.target.id && button.id != number) {
            button.innerText = "loser";
        } else {
            button.innerText = "";
        }
    }
});

