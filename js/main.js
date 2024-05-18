'use strict';

//////////////////////////////////////////////////////////

//DEFINIRE VARIABILI
const divItems = document.querySelector('.items');
const allDivItem = [];
let createImg;
let createTitle;
let createText;

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

console.log({images});

//AGGIUNGERE TUTTE LE IMMAGINI NEL DOM
for (let i = 0; i < images.length; i++) {

    //div item
    const createDiv = document.createElement('div');
    createDiv.classList.add("item");
    divItems.append(createDiv);
    allDivItem[i] = createDiv;
    //FISSARE LA PRIMA POSIZIONE
    if (i === 0) {
        createDiv.classList.add("active");
    }
    //image
    createImg = document.createElement('img');
    createDiv.append(createImg);
    createImg.src = `../${images[i].image}`;
    createImg.alt = images[i].title;
    //title
    createTitle = document.createElement('h1');
    createDiv.append(createTitle);
    createTitle.innerHTML = images[i].title;
    //text
    createText = document.createElement('p');
    createDiv.append(createText);
    createText.innerHTML = images[i].text;

}

clickNext.addEventListener('click',
    function() {
    
        allDivItem[position].classList.remove("active");
        allDivItem[scrollCarouselNext(position, images)].classList.add("active");

        //changing position in the array
        position = scrollCarouselNext(position, images);
        console.log({position});

        //scrolling title
        createTitle.innerHTML = images[position].title;
        //console.log({currentTitle}.innerHTML);

        //scrolling text
        createText.innerHTML = images[position].text;

        //scrolling image
        createImg.src = `../${images[position].image}`;

    }
)

clickPrev.addEventListener('click',
    function() {
    
        allDivItem[position].classList.remove("active");
        allDivItem[scrollCarouselPrev(position, images)].classList.add("active");

        //changing position in the array
        position = scrollCarouselPrev(position, images);
        console.log({position});

        //scrolling title
        createTitle.innerHTML = images[position].title;
        //console.log({currentTitle}.innerHTML);

        //scrolling text
        createText.innerHTML = images[position].text;

        //scrolling image
        createImg.src = `../${images[position].image}`;

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