let parent = document.querySelector('div');
parent.addEventListener("click", displayWinner);

function displayWinner(evt) {
    let number = Math.floor(Math.random() * 3);
    for (let i = 0; i < 3; ++i) {
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

