//Array to hold urls
const urlArray = ['./resources/photos/goodImage1.jpeg', './resources/photos/goodImage2.jpeg', './resources/photos/goodImage3.jpeg', './resources/photos/neutralImage1.jpeg', './resources/photos/neutralImage2.jpeg', './resources/photos/neutralImage3.jpeg', './resources/photos/evilImage1.jpeg', './resources/photos/evilImage2.jpeg', './resources/photos/evilImage3.jpeg'];

//Random number generator will be used as a way to generate the meme when a button is clicked
let randomNumber = length => Math.floor(Math.random() * length)

const getRandomData = arr => arr[randomNumber(arr.length)];

<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
console.log(urlArray);
console.log(randomNumber(10));
console.log(getRandomData(urlArray));
>>>>>>> 50aa8cd4a48702eda05c79cdfe9fafe3448168b6
>>>>>>> cca7f0b64772b7fcbfde1101b05e6ec99b98240f

const showMeme = () => {
    //Create a random number and set it as the index holding the meme
    let randomNumber = randomNumber();
    const randomUrl = urlArray[randomNumber];

    //Create a variable to represent that place where the meme will appear
    const container = document.getElementsByClassName('picture-container');

    //Create the newImage variable to hold the meme
    const newImage = document.createElement('img');

    //Use setAttribute to give it a src and then the randomUrl as the contents
    newImage.setAttribute('src', randomUrl);

    //Add it to the document
    container.appendChild(newImage);
}