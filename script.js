//Random number generator will be used as a way to generate the meme when a button is clicked
let randomNumber = () => {
    let randNum = Math.floor(Math.random()*3);
    return randNum;
}


//Variables for images
let goodMeme1 = document.getElementById('good-meme-one');
let goodMeme2 = document.getElementById('good-meme-two');
let goodMeme3 = document.getElementById('good-meme-three');
let neutralMeme1 = document.getElementById('neutral-meme-one');
let neutralMeme2 = document.getElementById('neutral-meme-two');
let neutralMeme3 = document.getElementById('neutral-meme-three');
let evilMeme1 = document.getElementById('evil-meme-one');
let evilMeme2 = document.getElementById('evil-meme-two');
let evilMeme3 = document.getElementById('evil-meme-three');


//Arrays that will hold the memes content. Using strings for now until I can figure out how to use media
let emptyArray = 0;
// emptyArray.style.display = 'none';

let memeHolder = {
    0: [goodMeme1, goodMeme2, goodMeme3],
    1: [neutralMeme1, neutralMeme2, neutralMeme3],
    2: [evilMeme1, evilMeme2, evilMeme3],
}


//Hide all memes until the button is clicked
goodMeme1.style.display = 'none';
goodMeme2.style.display = 'none';
goodMeme3.style.display = 'none';
neutralMeme1.style.display = 'none';
neutralMeme2.style.display = 'none';
neutralMeme3.style.display = 'none';
evilMeme1.style.display = 'none';
evilMeme2.style.display = 'none';
evilMeme3.style.display = 'none';

//Click the button
let button = document.getElementById('button');

const showImage = function(){
    let index1 = randomNumber();
    let index2 = randomNumber();

    emptyArray = memeHolder[index1][index2];
    emptyArray.style.display = 'inline-block';
}

button.addEventListener('click', showImage);

//Successfully got the button to show an image, but now I can't figure out how to get that image to disappear when the button is clicked again. I would need to access that portion of the memeHolder array, but if the function starts over then the index disappears. Maybe if I push it to the empty array and then change the hidden to true before the function body starts over?