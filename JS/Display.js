//Encargada de controlar la calculadora y va a interactuar con nuestros botones

class Display {
  constructor(displayPreviousValue, displayCurrentlyValue) {
    this.displayCurrentlyValue = displayCurrentlyValue;
    this.displayPreviousValue = displayPreviousValue;
    this.calculator = new Calculator();
    this.typeOperator = undefined;
    this.currentlyValue = "";
    this.previousValue = "";
    this.signs = {
      sumar: "+",
      dividir: "%",
      multiplicar: "X",
      restar: "-",
    };
  }

  deleteNumber() {
    this.currentlyValue = this.currentlyValue.toString().slice(0, -1);
    this.printValues();
  }

  deleteAll() {
    this.currentlyValue = "";
    this.previousValue = "";
    this.typeOperator = undefined;
    this.printValues();
  }

  compute(type) {
    this.typeOperator !== "igual" && this.calculate();
    this.typeOperator = type;
    this.previousValue = this.currentlyValue || this.previousValue;
    this.currentlyValue = "";
    this.printValues();
  }
  addNumber(number) {
    if (number === "." && this.currentlyValue.includes(".")) return;

    //   if(number === 10) break
    this.currentlyValue = this.currentlyValue.toString() + number.toString();
    this.printValues();
  }

  printValues() {
    this.displayCurrentlyValue.textContent = this.currentlyValue;
    this.displayPreviousValue.textContent = ` ${this.previousValue} ${this.signs[this.typeOperator] || "" }`;
  };

  calculate() {
    const previousValue = parseFloat(this.previousValue);
    const currentlyValue = parseFloat(this.currentlyValue);

    if (isNaN(currentlyValue) || isNaN(previousValue)) return;
    this.currentlyValue = this.calculator[this.typeOperator](previousValue,currentlyValue);
  }
}
