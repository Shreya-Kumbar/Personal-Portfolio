window.alert("You are being directed to My JavaScript Functions.");

function myfunc() {
    document.getElementById('demo').innerHTML = "plllllllllllllllllllllll"
    console.log(5+7)
}

let clicked = 0;

function clickCounter() {
    clicked++;
    document.getElementById('counter').innerHTML = "Clicked " + clicked + " times";
}

function checkEvenOdd(number) {

    let input = document.getElementById('number_input').value;
    let n = Number(document.getElementById('number_input').value);

    if (input === ""){
        document.getElementById('result').innerText = "Please enter a number...";
        return;
    }

    if (n % 2 === 0)
        document.getElementById('result').innerText = n + " is Even";
    else
        document.getElementById('result').innerText = n + " is Odd";

}