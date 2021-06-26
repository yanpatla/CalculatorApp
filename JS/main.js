const displayPreviousValue = document.getElementById("previous-value");
const displayCurrentlyValue = document.getElementById("currently-value");
const btnNumbers = document.querySelectorAll(".number");
const btnOperators = document.querySelectorAll(".operator");

const display = new Display(displayPreviousValue, displayCurrentlyValue);

btnNumbers.forEach((btn) => {
  btn.addEventListener("click", () => display.addNumber(btn.innerHTML));

});

btnOperators.forEach(btn =>  {
btn.addEventListener('click' ,() => display.compute(btn.value));


});
