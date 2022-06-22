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
    let number = 0;

    button.addEventListener('click', () => {
        let number = document.getElementById("wordNumber").value;
        sessionStorage.setItem('wordNumber', number.value);
        form.removeChild(wordNumberLabel);
        form.removeChild(wordNumberInput);
        submitButton.setAttribute = "";
        form.removeChild(submitButton);


    });
}

function createFormCard() {

    let divForm = document.createElement("div");
    divForm.setAttribute('class', "form");

    let wordLabel = document.createElement("label");
    wordLabel.innerText = "Enter the word: ";

    let wordInput = document.createElement("input");
    wordInput.setAttribute('type', "text");
    wordInput.setAttribute('class', "word");

    let clueLabel = document.createElement("label");
    clueLabel.innerText = "Enter the clue: ";

    let clueInput = document.createElement("input");
    clueInput.setAttribute('type', "text");
    clueInput.setAttribute('class', "clue");

    let imageLabel = document.createElement("label");
    imageLabel.innerText = "Enter the image path";

    let imageInput = document.createElement("input");
    imageInput.setAttribute('type', "file");
    imageInput.setAttribute('class', "imagePath");

    form.appendChild(divForm);
    form.appendChild(wordLabel);
    form.appendChild(wordInput);
    form.appendChild(clueLabel);
    form.appendChild(clueInput);
    form.appendChild(imageLabel);
    form.appendChild(imageInput);


    document.body.appendChild(form);


}

function createSubmitButton() {

    let submitButton = document.createElement("button");
    submitButton.innerText = "submit";
    submitButton.setAttribute('id', "bttn");
    submitButton.setAttribute('type', "submit");

    form.appendChild(submitButton);
}


let form = document.createElement("form");

let dataArray = [];

let formNumber = 6;

for (let i = 0; i < formNumber; i++) {
    createFormCard();
}

createSubmitButton();

button = document.getElementById("bttn");

button.addEventListener('click', (e) => {

    e.preventDefault();

    let wordArray = document.getElementsByClassName("word");
    let clueArray = document.getElementsByClassName("clue");
    let imageWordArray = document.getElementsByClassName("imagePath");

    for (let i = 0; i < formNumber; i++) {

        let word = wordArray[i].value;
        let clue = clueArray[i].value;
        let imageWord = imageWordArray[i].value;
        dataArray[i] = new Word(word, clue, imageWord);
    }

    for (let i = 0; i < formNumber; i++) {

        json = JSON.stringify(dataArray[i]);

        localStorage.setItem(`word${i}`, json);
    }
});

Swal.fire({
    title: 'Welcome to Taylored Word Games!',
    text: 'Do you want to continue?',
    icon: 'success',
    confirmButtonText: 'Cool'
})

