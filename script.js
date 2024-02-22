let parent = document.querySelector('div');
parent.addEventListener("click", ceva);

function ceva(evt) {
    let number = Math.floor(Math.random() * 3);
    for (let i = 0; i < 3; ++i) {
        if (parent.children[i].id == evt.target.id) {
            if (parent.children[i].id == number) {
                parent.children[i].innerText = "castigator";
            } else {
                parent.children[i].innerText = "necastigator";
            }
        } else {
            parent.children[i].innerText = "";
        }
    }
}

