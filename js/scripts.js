const images = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"

];

const itemsContainer = document.querySelector('.items')

for(let i = 0;i<images.length;i++){

    if(i==0) {
        itemsContainer.innerHTML += `<div class="item active">
        <img src="${images[i]}" alt="">
    </div>`;

    }
    
    else {
    itemsContainer.innerHTML += `<div class="item">
    <img src="${images[i]}" alt="">
</div>`;
    }
}