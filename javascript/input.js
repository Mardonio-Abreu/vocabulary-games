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

function saveData(data){
    let button = document.getElementById("bttn");

    button.addEventListener('click', () => {
        let number = document.getElementById(data);
        sessionStorage.setItem(data, number.value);
    });
}

function createNumberForm() {

    let form = document.createElement("form");

    let wordNumberLabel = document.createElement("label");
    wordNumberLabel.innerText = "Enter the number of words";

    let wordNumberInput = document.createElement("input");
    wordNumberInput.setAttribute('type', "number");
    wordNumberInput.setAttribute('id', "wordNumber");
    //wordNumberInput.setAttribute('value', "6");
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

    button.addEventListener('click', () => {
        let number = document.getElementById("wordNumber");
        sessionStorage.setItem('wordNumber', number.value);
    });


}

function createFormCard() {

    let form = document.createElement("form");

    let wordLabel = document.createElement("label");
    wordLabel.innerText = "Enter the word";

    let wordInput = document.createElement("input");
    wordInput.setAttribute('type', "text");
    wordInput.setAttribute('class', "word");

    let clueLabel = document.createElement("label");
    clueLabel.innerText = "Enter the clue";

    let clueInput = document.createElement("input");
    clueInput.setAttribute('type', "text");
    clueInput.setAttribute('class', "clue");

    /* let imageLabel = document.createElement("label");
    imageLabel.innerText = "Enter the image path";

    let imageInput = document.createElement("input");
    imageInput.setAttribute('type', "file");
    imageInput.setAttribute('id', "imagePath"); */

    
 
    form.appendChild(wordLabel);
    form.appendChild(wordInput);
    form.appendChild(clueLabel);
    form.appendChild(clueInput);
    /* form.appendChild(imageLabel);
    form.appendChild(imageInput); */
    

    document.body.appendChild(form);

}

function createSubmitData(){

    let submitButton = document.createElement("button");
    submitButton.innerText = "submit";
    submitButton.setAttribute('id', "bttn1");
    submitButton.setAttribute('type', "submit");

    document.body.appendChild(submitButton);



}

createNumberForm();
formNumber = sessionStorage.getItem('wordNumber');
console.log(formNumber);

for(let i = 0; i < formNumber; i++){
    createFormCard();
}

createSubmitData();

let button = document.getElementById("bttn1");

    button.addEventListener('click', () => {
        
        let dataArray = [];
        let wordArray = document.getElementsByClassName("word");
        let clueArray = document.getElementsByClassName("clue");
        
        for (let i = 0; i < wordArray.length; i++){
            let word = wordArray[i].value;
            let clue = clueArray[i].value;
            dataArray[i] = new Word(word, clue); 
        }

        let json = JSON.stringify(dataArray);
        
        localStorage.setItem('dataArray', json);
        
        document.body.innerHTML = '';
        
        let message = document.createElement("p");
        message.innerText = "Success";
        document.body.appendChild(message);
    });



