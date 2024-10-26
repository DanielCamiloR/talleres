function calculadora(){
    let num1 = parseFloat(document.getElementById('num1').value) || 0;
    let num2 = parseFloat(document.getElementById('num2').value) || 0;
    let op = document.getElementById('op').value
   console.log(num1,num2,op)
// Switch en JavaScript
switch (op) {
  case '+':
    sumar(num1,num2)
    break;
  case '-':
    restar(num1,num2)
    break;
  case '*':
    multiplicar(num1,num2)
    break;
  case '/':
    dividir(num1,num2)
    break;
  // ...
}

}
function sumar(a,b){
let result =  a + b
document.getElementById('result').value = result
}
function restar(a,b){
let result =  a - b
document.getElementById('result').value = result
}
function multiplicar(a,b){
let result =  a * b
document.getElementById('result').value = result
}
function dividir(a,b){
let result = b <= 0 ? "No se puede dividir por 0" : a / b
document.getElementById('result').value = result
}