// const connectBtn = document.getElementById("connect");

const form = document.getElementById("rate-form");
const resultDisplay = document.getElementById("result");

document.querySelector("#rate-form").addEventListener("submit", function(e){
    e.preventDefault();    //stop form from submitting
    const price = Number(form.price.value);
    const gallons = Number(form.gallons.value);
    const app_rate = Number(form["application-rate"].value);
    const formulation = Number(form.formulation.value);


    const result = (price * gallons * app_rate * formulation)/32;

    resultDisplay.textContent = result;
});