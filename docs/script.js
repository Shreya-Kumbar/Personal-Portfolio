window.alert("You are being directed to My JavaScript Functions.");

let clicked = 0;

function clickCounter() {
    clicked++;
    document.getElementById('counter').innerHTML = "Clicked " + clicked + " times";
}

function checkEvenOdd() {

    let input = document.getElementById('odd-even-block-input').value;
    let n = Number(input);
    let display_result = document.getElementById('odd-even-result');

    if (input === ""){
        display_result.innerText = "Please enter a number...";
        return;
    }

    if (n % 2 === 0)
        display_result.innerText = n + " is Even";
    else
        display_result.innerText = n + " is Odd";

}

function findMinMax() {
    let input = document.getElementById('min-max-block-input').value;
    let display_result = document.getElementById('min-max-result');

    if (input === ""){
        display_result.innerText = "Please enter some input...";
        return;
    }

    let minimum = Math.min(...input);
    let maximum = Math.max(...input);
    
    display_result.innerText = "Maximum: " + maximum + " | Minimum: " + minimum;

    return;
}