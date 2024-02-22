let parent = document.querySelector('div');
let n = 4;
document.getElementById("Submit").addEventListener("click", createButtons);

function createButtons() {
    n = parseInt(n) + parseInt(document.getElementById("n").value);
    console.log(n);
    for (let i = 4; i < n; ++i) {
        let button = document.createElement("button");
        button.classList.add("button");
        button.id = i;
        parent.appendChild(button);
    }
}

parent.addEventListener("click", displayWinner);

function displayWinner(evt) {
    let number = Math.floor(Math.random() * n);
    for (let i = 0; i < n; ++i) {
        let button = parent.children[i];
        if (button.id == evt.target.id) {
            if (button.id == number) {
                button.innerText = "castigator";
            } else {
                button.innerText = "necastigator";
            }
        } else {
            button.innerText = "";
        }
    }
}

