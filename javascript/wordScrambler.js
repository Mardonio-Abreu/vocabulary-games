let wordToScramble;
let flag = true;

function wordValidation() {

    flag = true;
    let word0, word;
    do {
        word0 = prompt("Enter a word:");
        word = word0.toLowerCase();

        if (word === "") {
            console.log("Enter a non-empty word!");
            flag = true;

        } else if (!isNaN(word)) {
            console.log("Enter a word not number!");
            flag = true;

        } else if (!(/^[a-z]*$/.test(word))) {
            console.log("Enter a valid word!")
            flag = true;

        } else {
            flag = false;
        }

    } while (flag);

    return word;
}

wordToScramble = wordValidation();
const charArray = wordToScramble.split('');
charArrayLength = charArray.length;

let numArray = [];

function randomNumber() {
    return (Math.floor(Math.random() * charArrayLength - 1));
}

for (let i = 0; i < charArrayLength; i++) {
    numArray[i] = randomNumber();
        for (let j = i; j >= 0; j--) {
            while (numArray[i] === numArray[j]) {
                numArray[i] = randomNumber();
            }
        }
        console.log(numArray[i]);
    } 


