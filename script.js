//Button variable
const button = document.getElementById('button');

//Array to hold urls
const urlArray = ['./resources/photos/goodImage1.jpeg', './resources/photos/goodImage2.jpeg', './resources/photos/goodImage3.jpeg', './resources/photos/neutralImage1.jpeg', './resources/photos/neutralImage2.jpeg', './resources/photos/neutralImage3.jpeg', './resources/photos/evilImage1.jpeg', './resources/photos/evilImage2.jpeg', './resources/photos/evilImage3.jpeg'];

//Random number generator will be used as a way to generate the meme when a button is clicked
let randomNumber = length => Math.floor(Math.random() * length)

const getRandomData = arr => arr[randomNumber(arr.length)];


const showMeme = () => {
    //Create a random number and set it as the index holding the meme
    const randomUrl = getRandomData(urlArray);

    //Create a variable to represent that place where the meme will appear
    const container = document.querySelector('.picture-container');

    //Create the newImage variable to hold the meme
    const newImage = document.createElement('img');

    //Use setAttribute to give it a src and then the randomUrl as the contents
    newImage.setAttribute('src', randomUrl);

    //Check if img is already present and then clear it. This will help reset the image everytime the button is clicked
    let isImg = container.querySelector('img');

    if(isImg){
        container.innerHTML = '';
    }

    //Add it to the document
    container.appendChild(newImage);
}

button.addEventListener('click', showMeme);