let buttonContainer = document.getElementById('buttons-container');
let n = 4;

document.getElementById("Submit").addEventListener("click", function() {
    let nn = parseInt(document.getElementById("n").value) + n;
    for (let i = n; i < nn; ++i) {
        let button = document.createElement("button");
        button.classList.add("button");
        button.id = i;
        buttonContainer.appendChild(button);
    }
    n = nn;
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

