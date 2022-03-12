// const connectBtn = document.getElementById("connect");

const form = document.getElementById("rate-form");
const results = [];

const formulationMap = {
  "standard": {
    "3": 32,
    "3.7": 26,
    "4": 24,
    "4.17": 24,
    "4.5": 22,
    "5": 20,
  },
  "1.5x": {
    "3": 48,
    "3.7": 39,
    "4": 36,
    "4.17": 34,
    "4.5": 32,
    "5": 30,
  },
  "2x": {
    "3": 64,
    "3.7": 52,
    "4": 48,
    "4.17": 48,
    "4.5": 44,
    "5": 40,
  },
}


document.querySelector("#rate-form").addEventListener("submit", function(e){
    e.preventDefault();    //stop form from submitting
    const price = Number(form.price.value);
    const gallons = Number(form.gallons.value);
    const app_rate = form["application-rate"].value;
    const formulation = form.formulation.value;

    const result = ((price/gallons) * formulationMap[app_rate][formulation])/32;

    results.push(result.toFixed(2));
    displayResults();
});


function displayResults(){
  const resultsList = document.getElementById("results-list");
  resultsList.innerHTML = "";
  results.forEach(result => {
    const li = document.createElement("li");
    li.textContent = `$${result} per acre`;
    resultsList.appendChild(li);
  });
}