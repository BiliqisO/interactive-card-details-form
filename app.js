const cardNumber = document.getElementById("card-number");
const inputNumber = document.getElementById("number");
const inputName = document.getElementById("name");
const cardName = document.getElementById("card-name");
const submitData = document.getElementById("submit");
const inputMonth = document.getElementById("month");
const cardMonth = document.getElementById("card-month");
const inputYear = document.getElementById("year");
const cardYear = document.getElementById("card-year");
const inputCvc = document.getElementById("cvc");
const cardCvc = document.getElementById("card-cvc")
const the = document.getElementById("the");
const thank = document.getElementById("thank")
const input = document.getElementsByTagName("input")

function caller() {
    const numberValue = inputNumber.value;
    cardNumber.innerText = numberValue;
    const nameValue = inputName.value;
    cardName.innerText = nameValue;
    const monthValue = inputMonth.value;
    cardMonth.innerText = monthValue;
    const yearValue = inputYear.value;
    cardYear.innerText = yearValue;
    const cvcValue = inputCvc.value;
    cardCvc.innerText = cvcValue;
    // document.getElementById('my-input').value = ''
    document.getElementsByTagName("form")[0].reset();
    // return false
    // $('#card-number').mask("9999 9999 9999 9999");

}
function successful(){

    the.style.display = "none";
    thank.style.display = "block";
    
}


function validity() {
function myFunction() {
 
  let x = input.value;

  let text;
    if (isNaN(x) || x < 1 || x > 19) {
       window.getComputedStyle(
	input, ':after'
)
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
    
  document.getElementById("demo").innerHTML = text;
}
}
// function validity() {
//     if (!input.checkValidity()) {
//   console.log("Invalid email");
// } else {
//   console.log("Valid email");
// }
// }
submitData.addEventListener("click",  successful)
submitData.addEventListener("click", caller)
// submitData.addEventListener("click", validity)



