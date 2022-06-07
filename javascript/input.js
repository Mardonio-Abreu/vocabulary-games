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

    let button = document.getElementById("bttn");

    button.addEventListener('click', () => {
        let number = document.getElementById("wordNumber");
        sessionStorage.setItem('wordNumber', number.value);
        form.removeChild(wordNumberLabel);
        form.removeChild(wordNumberInput);
        submitButton.setAttribute = "";
        form.removeChild(submitButton);


    });

}

function createFormCard() {


    let form = document.createElement("form");

    let wordLabel = document.createElement("label");
    wordLabel.innerText = "Enter the word";

    let wordInput = document.createElement("input");
    wordInput.setAttribute('type', "text");
    wordInput.setAttribute('id', "word");

    let clueLabel = document.createElement("label");
    clueLabel.innerText = "Enter the clue";

    let clueInput = document.createElement("input");
    clueInput.setAttribute('type', "text");
    clueInput.setAttribute('id', "input");

    let imageLabel = document.createElement("label");
    imageLabel.innerText = "Enter the image path";

    let imageInput = document.createElement("input");
    imageInput.setAttribute('type', "file");
    imageInput.setAttribute('id', "imagePath");

    let submitButton = document.createElement("button");
    submitButton.innerText = "submit";
    submitButton.setAttribute('id', "bttn1");
    submitButton.setAttribute('type', "submit");


    form.appendChild(wordLabel);
    form.appendChild(wordInput);
    form.appendChild(clueLabel);
    form.appendChild(clueInput);
    form.appendChild(imageLabel);
    form.appendChild(imageInput);
    form.appendChild(submitButton);

    document.body.appendChild(form);


}


//Main part
//Get number of words 

createNumberForm();


let formNumber = sessionStorage.getItem('wordNumber');

let dataArray = [];

for (let i = 0; i < formNumber; i++) {



    createFormCard();

    button = document.getElementById("bttn1");

    button.addEventListener('click', () => {

            let word = document.getElementById("word").value;
            let clue = document.getElementById("clue").value;
            let imageWord = document.getElementById("imageWord").value;

            dataArray[i] = new Word(word, clue, imageWord);

        }
    }


  