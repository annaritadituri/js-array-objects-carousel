'use strict';

//////////////////////////////////////////////////////////

//DEFINIRE VARIABILI
const divItems = document.querySelector('.items');
const clickNext = document.querySelector('.next');
const clickPrev = document.querySelector('.prev');
let position = 0;

//CREARE ARRAY DI OGGETTI
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//console.log({images});

//FISSARE LA PRIMA POSIZIONE
//image
const createDiv = document.createElement('div');
createDiv.classList.add("item");
//createDiv.classList.add("active");
divItems.append(createDiv);
const createImg = document.createElement('img');
createDiv.append(createImg);
let currentImg = document.querySelector('img');
currentImg.src = `../${images[position].image}`;
//title
const createTitle = document.createElement('h1');
divItems.append(createTitle);
let currentTitle = document.querySelector('h1');
currentTitle.innerHTML = images[position].title;
//text
const createText = document.createElement('p');
divItems.append(createText);
let currentText = document.querySelector('p');
currentText.innerHTML = images[position].text;

//ATTIVARE LO SCROLL
clickNext.addEventListener('click',
    function() {

        //changing position in the array
        position = scrollCarouselNext(position, images);
        //console.log({position});
        //console.log(images[position]);

        //scrolling title
        currentTitle.innerHTML = images[position].title;
        //console.log({currentTitle}.innerHTML);

        //scrolling text
        currentText.innerHTML = images[position].text;

        //scrolling image
        currentImg.src = `../${images[position].image}`;
    }
)

clickPrev.addEventListener('click',
    function() {

        //changing position in the array
        position = scrollCarouselPrev(position, images);
        //console.log({position});
        //console.log(images[position]);

        //scrolling title
        currentTitle.innerHTML = images[position].title;
        //console.log({currentTitle}.innerHTML);

        //scrolling text
        currentText.innerHTML = images[position].text;

        //scrolling image
        currentImg.src = `../${images[position].image}`;
        
    }
)

/////////////////////////////////////////////
/*
FUNCTION scrollCarouselNext()
*/
function scrollCarouselNext(countCarousel, array) {

    countCarousel++;
    if(countCarousel === array.length) {
        countCarousel = 0;
    }
    return countCarousel;

}

/*
FUNCTION scrollCarouselPrev()
*/

function scrollCarouselPrev(countCarousel, array) {

    countCarousel--;
    if(countCarousel === -1) {
        countCarousel = array.length - 1;
    }
    return countCarousel;

}