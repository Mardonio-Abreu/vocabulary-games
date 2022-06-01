class Word {
    constructor(word, clue) {
        this.word = word;
        this.clue = clue;
        this.wordLength = function () {
            return word.length;
        }
        this.charArray = function () {
            return word.split("");
        }
    }

}

function createNumberForm() {

    let form = document.createElement("form");

    let wordNumberLabel = document.createElement("label");
    wordNumberLabel.innerText = "Enter the number of words";

    let wordNumberInput = document.createElement("input");
    wordNumberInput.setAttribute('type', "number");
    wordNumberInput.setAttribute('id', "wordNumber");
    wordNumberInput.setAttribute('value', "6");
    wordNumberInput.setAttribute('min', "1");
    wordNumberInput.setAttribute('max', "12");


    let submitButton = document.createElement("button");
    submitButton.innerText = "submit";
    submitButton.setAttribute('id', "bttn");
    submitButton.setAttribute('type', "submit");

    form.appendChild(wordNumberLabel);
    form.appendChild(wordNumberInput);
    form.appendChild(submitButton);

    document.body.appendChild(form);

    let button = document.getElementById("bttn");

    function returnData() {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            let number = document.getElementById("wordNumber");
            return number.value;
        });
    }

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
    clueInput.setAttribute('id', "clue");

    let imageLabel = document.createElement("label");
    imageLabel.innerText = "Enter the image path";

    let imageInput = document.createElement("input");
    imageInput.setAttribute('type', "file");
    imageInput.setAttribute('id', "imagePath");

    let submitButton = document.createElement("button");
    submitButton.innerText = "submit";
    submitButton.setAttribute('id', "bttn");
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



/* for (let i = 0; i < number.value; i++) {
            createFormCard();
        } */

let number = createNumberForm();
console.log(number);