//Random number generator will be used as a way to generate the meme when a button is clicked
let randomNumber = () => {
    let randNum = Math.floor(Math.random()*10);
    return randNum;
}

//Arrays that will hold the memes content. Using strings for now until I can figure out how to use media
let emptyArray = [];

let memeHolder = {
    evilMeme: ['chaosCat1'],
    neutralMeme: ['neutralCat1', 'neutralCat2', 'neutralCat3'],
    goodMeme: ['goodCat1', 'goodCat2', 'goodCat3'],
}