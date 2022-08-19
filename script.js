//Array to hold urls
const urlArray = ['./resources/photos/goodImage1.jpeg', './resources/photos/goodImage2.jpeg', './resources/photos/goodImage3.jpeg', './resources/photos/neutralImage1.jpeg', './resources/photos/neutralImage2.jpeg', './resources/photos/neutralImage3.jpeg', './resources/photos/evilImage1.jpeg', './resources/photos/evilImage2.jpeg', './resources/photos/evilImage3.jpeg'];

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
let emptyArray1 = [];
let emptyArray2 = [];

let memeHolder = {
    0: [goodMeme1, goodMeme2, goodMeme3],
    1: [neutralMeme1, neutralMeme2, neutralMeme3],
    2: [evilMeme1, evilMeme2, evilMeme3],
}


//Hide all memes until the button is clicked
for(let i = 0; i<3; i++){
    memeHolder[i].forEach(e => e.hidden = true)
}


//Click the button
let button = document.getElementById('button');

let index1 = randomNumber();
let index2 = randomNumber();


const assignNewArray = (arr) => {
    arr.push(memeHolder[index1][index2]);
    return arr;
}

 assignNewArray(emptyArray1); //Setting a variable as the data from the function to use it as an event handler function 

const toggleImage = () => {
    let hiddenImage = emptyArray1[0].hidden;

    if(hiddenImage){
        emptyArray1[0].hidden = false;
    }

    else if(!hiddenImage){
        emptyArray1[0].hidden = true;
    }
}
 /*Cleaned up the code, and made it so that one photo will appear. I'm struggling to figure out how to get a new one to pop up in its place*/