console.log(eval(new String("2+2")))
console.log(eval("2+2"))
/* Tipos de datos */
var a = 1 //globales
var b = 2 //globales
const NAME = "Esto nunca cambia"
/* Primitivos */
// String
var name = "Daniel"
// Numerico
var age = 22
// Boolean
var isAdmin = true
// Objeto
var object ={
    name: "Daniel",
    age: 22,
    phone: 3465656897
}
// Arrays
var array = [1,2,3,4,5,6,7,8,9,10];
// Null
var nullValue = null

/* Operadores: 
   Retornan un boolean
*/
// Mayor que
let mayor = (a > b) // local
// Menor que
let menor = (a < b) // local
// Mayor o igual que
let mayorIgual = (a >= b) // local
// Menor o igual que
let menorIgual = (a <= b) // local
// Igual que
let igual = (a == b) // local
// Distinto que
let distinto = (a != b) // local
/* Operadores: 
   Retornan un valor
*/
// Exponente
let exponente = (a ** b) // local
// suma 
let suma = (a + b) // local
// resta
let resta = (a - b) // local
// multiplicacion
let multiplicacion = (a * b) // local
// division
let division = (a / b) // local
// Modulo
let modulo = (a % b) // local
// preincremento
suma = ++a;
//posincremento
suma = a++;
// predecremento
resta = --a;
// posdecremento
resta = a--;
// asignacion compuesta
suma =+a
resta -=a
multiplicacion *=a
division /=a
modulo %=a
exponente **=a
// Ternarias
let numero = 10;
let ternaria = b >= a ? 'b es mayor o igual que a' : 'b es menor que a'
let resultado = (numero % 2 == 0) ? 'es par': "es impar";
