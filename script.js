let buttonContainer = document.getElementById('buttons-container');
let n = 4;

document.getElementById("Submit").addEventListener("click", function() {
    n = parseInt(n) + parseInt(document.getElementById("n").value);
    for (let i = 4; i < n; ++i) {
        let button = document.createElement("button");
        button.classList.add("button");
        button.id = i;
        buttonContainer.appendChild(button);
    }
});

buttonContainer.addEventListener("click", function(event) {
    let number = Math.floor(Math.random() * n);
    for (let i = 0; i < n; ++i) {
        let button = buttonContainer.children[i];
        if (button.id == event.target.id) {
            if (button.id == number) {
                button.innerText = "castigator";
            } else {
                button.innerText = "necastigator";
            }
        } else {
            button.innerText = "";
        }
    }
});

