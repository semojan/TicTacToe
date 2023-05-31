function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;

    overlyModalE.style.display = "block";
    overlyBackdropE.style.display = "block";
}

function closeConfig() {
    overlyModalE.style.display = "none";
    overlyBackdropE.style.display = "none";
    formE.firstElementChild.classList.remove("error");
    configErrorE.textContent = "";
    formE.firstElementChild.lastElementChild.value = "";
}

function saveConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get("userName").trim();

    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add("error");
        configErrorE.textContent = "please enter a valid name!";
        return;
    }

    const updatedPData = document.getElementById("player" + editedPlayer + "Data");

    updatedPData.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;

    closeConfig();
}