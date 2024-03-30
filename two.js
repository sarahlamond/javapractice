var numberOne = parseFloat(prompt("enter the first number:"));
var numberTwo = parseFloat(prompt("enter the second number:"));

if (numberOne === numberTwo) {
    alert("the numbers you chose are equal");
} else if (numberOne < numberTwo) {
    alert("the first number is less than the second");
} else {
    alert("the first number is greater than the second");
}