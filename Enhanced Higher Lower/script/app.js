window.onload = getMaxNumber;

let maxNumber;
let input;
let randomNumber;
let listOfGuessedNumbers = [];
let informer;

function getMaxNumber(){
    input = prompt("Please enter a maximum number", "Max number");
    maxNumber = inputConv(input);
    while(isNaN(maxNumber)){
        input = prompt("Please enter a maximum number", "Max number");
        maxNumber = inputConv(input);
    }

    let instruction = document.querySelector('.instruction');
        instruction.innerHTML = `Guess a number between 1 and ${maxNumber}`;
        document.getElementById("number").value = '';

        //Generate a random number between 1 and max number, including max number
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        
        //Uncomment this to show the randdom number to be guessed
        console.log("Random number " + randomNumber);
        45
        document.getElementById("button").addEventListener('click', checkGuessedNumber);
}

function checkGuessedNumber(){
    input = document.getElementById("number").value;

    //validate user guessed input
    let guessedNumber = inputConv(input);

    if(!isNaN(guessedNumber)){
        //Check for duplicate
        if(listOfGuessedNumbers.includes(guessedNumber)){
            document.getElementById("number").value = '';
            alert('You already tried this number, try again!')
        }
        //check to see if guess number is greater than max number
        else if(guessedNumber > maxNumber){
            document.getElementById("number").value = '';
            alert('That number is not in range, try again!')
        } 
        //check to see if guess number is greater than random number
        else if(guessedNumber > randomNumber){
            listOfGuessedNumbers.push(guessedNumber);
            document.getElementById("number").value = '';
            alert('No, try a lower number')
        } 
        //check to see if guess number is less than random number
        else if(guessedNumber < randomNumber){
            listOfGuessedNumbers.push(guessedNumber);
            document.getElementById("number").value = '';
            alert('No, try a higher number')
        } else{
            listOfGuessedNumbers.push(guessedNumber);
            document.getElementById("number").value = '';
            //insert congratulatory message
            let paragraph = document.createElement('p');
            let node = document.createTextNode(`You got it!!!! It took you ${listOfGuessedNumbers.length} tries
                                                and your guesses were ${listOfGuessedNumbers}`);
            paragraph.appendChild(node);
            document.querySelector('.container').appendChild(paragraph);

            document.getElementById("number").remove();
            document.getElementById("button").remove();

            let reload = document.createElement('button');
            let text = document.createTextNode('PLAY AGAIN');
            reload.appendChild(text);
            reload.setAttribute("id", "reload")
            document.querySelector('.container').appendChild(reload);

            reload.addEventListener("click", function pageReload(){
                location.reload();
            });
        }
    }

}

function inputConv(input){
    //check if input is a number..if it is not a number repeat until a number is entered
    if(isNaN(input)){
        alert("That is not a number!, try again!")
        document.getElementById("number").value = '';
        return;
    }

    //check if numeber is not negative or 0
    if(input < 1){
        alert("Enter a number greater than 0")
        return;
    }

    //Round number to a whole number
    let number = Math.round(input);
    return number;
} 

