function clicked() {
  var x = document.getElementById("fn").value; //getting the input value and inputing it in a var x
  document.getElementById("displayfn").innerHTML = x; //putting the value and writing it into a new html element

  var y = document.getElementById("sn").value; //getting the input value and inputing it in a var y
  document.getElementById("displaysn").innerHTML = y; //putting the value and writing it into a new html element
}
document.getElementById("btn").addEventListener("click", clicked); //calling the function upon clicking the button

function add() {
  var x = parseInt(document.getElementById("fn").value); //parseInt ->converting string to number to be able to add them
  var y = parseInt(document.getElementById("sn").value);
  var z = x + y;
  document.getElementById("displayadd").innerHTML = z; //displaying the result z 
}
document.getElementById("displayadd").addEventListener("click", add); //adds the numbers

function substract() {
  var x = parseInt(document.getElementById("fn").value); //parseInt ->converting string to number to be able to substract them
  var y = parseInt(document.getElementById("sn").value);
  var z = x - y;
  document.getElementById("displaysubstract").innerHTML = z;//displaying the result z 
}
document
  .getElementById("displaysubstract")
  .addEventListener("click", substract);

function multiply() {
  var x = parseInt(document.getElementById("fn").value); //parseInt ->converting string to number to be able to add them
  var y = parseInt(document.getElementById("sn").value);
  var z = x * y;
  document.getElementById("displaymultiply").innerHTML = z; //displaying the result z 
}
document.getElementById("displaymultiply").addEventListener("click", multiply);

function divide() {
  var x = parseInt(document.getElementById("fn").value); //parseInt ->converting string to number to be able to add them
  var y = parseInt(document.getElementById("sn").value);
  var z = x / y;
  document.getElementById("displaydivide").innerHTML = z.toFixed(3);//displaying the result z  adn rounds it to 3 dec places
}
document.getElementById("displaydivide").addEventListener("click", divide); 
