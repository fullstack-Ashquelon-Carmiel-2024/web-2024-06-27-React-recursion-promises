const card = document.querySelector(".card");

function flipCard() {
    card.classList.add('flip');
    card.removeEventListener('click',flipCard);
};

card.addEventListener("click",flipCard);