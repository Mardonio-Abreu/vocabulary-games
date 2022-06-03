class Word {
    constructor(word, clue, imageWord) {
        this.word = word;
        this.clue = clue;
        this.imageWord = imageWord;
        this.wordLength = function () {
            return word.length;
        }
        this.charArray = function () {
            return word.split("");
        }
    }


}

function eraser(className) {
    let erase = document.getElementsByClassName(className);
    for (let i = 0; i < erase.length; i++) {
        erase[i].innerText = "";
        erase[i].remove();
    }
}


function createNumberForm() {

    let form = document.createElement("form");
    form.setAttribute('class', "erase")
    let wordNumberLabel = document.createElement("label");
    wordNumberLabel.setAttribute('class', "erase")
    wordNumberLabel.innerText = "Enter the number of words";

    let wordNumberInput = document.createElement("input");
    wordNumberInput.setAttribute('type', "number");
    wordNumberInput.setAttribute('id', "wordNumber");
    wordNumberInput.setAttribute('class', "erase")
    //wordNumberInput.setAttribute('value', "6");
    wordNumberInput.setAttribute('min', "1");
    wordNumberInput.setAttribute('max', "12");

    let submitButton = document.createElement("button");
    submitButton.innerText = "submit";
    submitButton.setAttribute('class', "erase")
    submitButton.setAttribute('id', "bttn");
    submitButton.setAttribute('type', "submit");

    form.appendChild(wordNumberLabel);
    form.appendChild(wordNumberInput);
    form.appendChild(submitButton);

    document.body.appendChild(form);

}

function createFormCard() {


    let form = document.createElement("form");
    form.setAttribute('class', "erase")

    let wordLabel = document.createElement("label");
    wordLabel.setAttribute('class', "erase");
    wordLabel.innerText = "Enter the word";

    let wordInput = document.createElement("input");
    wordInput.setAttribute('type', "text");
    wordInput.setAttribute('class', "word validation");

    let clueLabel = document.createElement("label");
    clueLabel.setAttribute('class', "erase1");
    clueLabel.innerText = "Enter the clue";

    let clueInput = document.createElement("input");
    clueInput.setAttribute('type', "text");
    clueInput.setAttribute('class', "clue validation");

    let imageLabel = document.createElement("label");
    imageLabel.setAttribute('class', "erase2");
    imageLabel.innerText = "Enter the image path";

    let imageInput = document.createElement("input");
    imageInput.setAttribute('class', "imageWord")
    imageInput.setAttribute('type', "file");
    imageInput.setAttribute('id', "imagePath");


    form.appendChild(wordLabel);
    form.appendChild(wordInput);
    form.appendChild(clueLabel);
    form.appendChild(clueInput);
    form.appendChild(imageLabel);
    form.appendChild(imageInput);


    document.body.appendChild(form);

}

function createSubmitDataButton() {

    let submitButton = document.createElement("button");
    submitButton.innerText = "submit";
    submitButton.setAttribute('id', "bttn1");
    submitButton.setAttribute('type', "submit");
    submitButton.setAttribute('class', "submitButton");

    document.body.appendChild(submitButton);



}

//Main part

createNumberForm();

let button = document.getElementById("bttn");

button.addEventListener('click', () => {
    let number = document.getElementById("wordNumber");
    sessionStorage.setItem('wordNumber', number.value);

});


let formNumber = sessionStorage.getItem('wordNumber');


for (let i = 0; i < formNumber; i++) {
    createFormCard();
}

createSubmitDataButton();

button = document.getElementById("bttn1");

button.addEventListener('click', () => {

    let dataArray = [];
    let wordArray = document.getElementsByClassName("word");
    let clueArray = document.getElementsByClassName("clue");
    let imageArray = document.getElementsByClassName("imageWord");

    for (let i = 0; i < wordArray.length; i++) {
        let word = wordArray[i].value;
        let clue = clueArray[i].value;
        let imageWord = imageArray[i].value;
        dataArray[i] = new Word(word, clue, imageWord);
    }

    let json = JSON.stringify(dataArray);

    localStorage.setItem('dataArray', json);

    eraser("word");
    eraser("clue");
    eraser("imageWord");
    eraser("submitButton");
    eraser("erase");
    eraser("erase1");
    eraser("erase2");

});

//validation

