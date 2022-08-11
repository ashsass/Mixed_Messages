//Random number generator will be used as a way to generate the meme when a button is clicked
let randomNumber = () => {
    let randNum = Math.floor(Math.random()*10);
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
let emptyArray = [];

let memeHolder = {
    goodMeme: [goodMeme1, goodMeme2, goodMeme3],
    neutralMeme: [neutralMeme1, neutralMeme2, neutralMeme3],
    evilMeme: [evilMeme1, evilMeme2, evilMeme3],
}