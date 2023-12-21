const images = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"

];

const itemsContainer = document.querySelector('.items')

for(let i = 0;i<images.length;i++){
    let itemActive = 'item';

    if(i == 0) {
        itemActive += 'active';
        
    }
    
   
    itemsContainer.innerHTML += `
    <div class="${itemActive}">
        <img src="${images[i]}" alt="">
    </div>`;
    
}


const prevButton = document.querySelector('.prev');

const prevButton = document.querySelector('.next');

const allItems = document.querySelectorAll('.item');

let indiceDellitemConClasseActive = 0;




nextButton.addEventListener('click', function(){
    allItems[indiceDellitemConClasseActive].classList.remove('active');

    if(indiceDellitemConClasseActive < (allItems.length -1)) {
        indiceDellitemConClasseActive++;
    }
    else if (indiceDellitemConClasseActive == (allItems.length - 1 ) ){
        indiceDellitemConClasseActive = 0;
    }

    allItems[indiceDellitemConClasseActive].classList.add('active');
})


prevButton.addEventListener('click', function(){
    allItems[indiceDellitemConClasseActive].classList.remove('active');

    if(indiceDellitemConClasseActive > 0) {
        indiceDellitemConClasseActive--;
    }
    else if (indiceDellitemConClasseActive == 0 ){
        indiceDellitemConClasseActive = (allItems.length - 1) ;
    }

    allItems[indiceDellitemConClasseActive].classList.add('active');
})




setInterval( function(){
    allItems[indiceDellitemConClasseActive].classList.remove('active');

    if(indiceDellitemConClasseActive < (allItems.length -1)) {
        indiceDellitemConClasseActive++;
    }
    else if (indiceDellitemConClasseActive == (allItems.length - 1 ) ){
        indiceDellitemConClasseActive = 0;
    }

    allItems[indiceDellitemConClasseActive].classList.add('active');
},3000)