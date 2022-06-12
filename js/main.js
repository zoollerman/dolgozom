function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(price, amountNumber);
}

function showSumPrice(price, amountNumber) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }

}


// Add helptext
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

// parent.removeChild(helpText);

//Window events.
let sendButton = document.querySelector("form .btn.btn-primary");

/* sendButton.onclick = function(){
alert("Hello JS!");
}

sendButton.addEventListener("click", function(){
    alert("Hello JS!");
});

window.addEventListener("resize", function(){
    console.log(this.innerHeight, this.innerWidth);
}); */


// Parent element kezelése.
let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function (ev) {
    this.parentElement.style.display = "none";
}
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction);
}

// Select elem kitöltése
let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra Sonka"
];
let toppingSelect = document.querySelector("#topInput")
let index = 0;
while (index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}

//Napi ajánlat hőmérséklet szerint

let hoSavTetok = [0, 15, 20, 25, 50];
let hoFuggAjan = ["a zamatos forró csokoládét",
    "melengető forró teánkat.",
    "ínycsiklandó süteményünket",
    "ízletes fagyit",
    "Jéghideg, frissítő limonádét"]


let napiHomer = 17;
for (let index = 0; index < hoSavTetok.length; index++) {
    if (hoSavTetok[index] > napiHomer) {
        let ajanlMegjelPozi = document.querySelector("div.col-8 span")
        let napiMegallAjan = hoFuggAjan[index]
        ajanlMegjelPozi.innerHTML = napiMegallAjan;
        break;
    }
}
//Űrlap események
let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev){
    ev.preventDefault();
    
   
    let inputs = this.querySelectorAll("select", "input");
    let values = {};
    for (let i = 0; i< inputs.length; i++){
    values[inputs[i].name] = inputs[i].value;      
   
    }
    console.log( values );
});







