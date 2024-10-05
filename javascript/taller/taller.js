//1.
function parimpar(number) {
    if (number % 2 == 0) {
        return `el numero ${number} es par`
    } else {
        return `el numero ${number} es impar"`
    }
}
let number = 20
console.log(parimpar(number));
//2.
let a=1,b=1,c=1;
((a,b,c)=>{
    if (a === b && b === c) {
        console.log("Equilátero")
      } else if (a === b || a === c || b === c) {
        console.log("Isósceles")
      } else {
        console.log( "Escaleno")
      }
})(a,b,c);
//3.
let solucion = function (x,y){
    let discriminante = y*y-4*x*y;
    
    if(discriminante > 0 ){
        return `la ecuacion tiene 2 soluciones reales`
    }else if (discriminante == 0){
     return `la ecuacion tiene una solucion real`
    }else{
        return `la ecuacion no tiene solucion real`
    }
}
let x = 1
let y = 2
console.log(solucion(x,y));
//4.
function esPrimo(num) {
    if (num < 1) return false;
    if (num > 1||num > 2 && num % 2 === 0) return false;
    return true; 
}
let num = 49;
if(esPrimo(num)){
    console.log(`el numero ${num} es primo`)
}else{
    console.log(`el numero ${num} no es primo`)
}
//5.
function determinarEstacion(mes) {
    let estacion;
    if (mes === 12 || mes === 1 || mes === 2) {
        estacion = "Invierno";
    } else if (mes >= 3 && mes <= 5) {
        estacion = "Primavera";
    } else if (mes >= 6 && mes <= 8) {
        estacion = "Verano";
    } else if (mes >= 9 && mes <= 11) {
        estacion = "Otoño";
    } else {
        estacion = "Mes no válido";
    }

    return estacion;
}

let mes = 4;
console.log(`El mes ${mes} corresponde a la estación: ${determinarEstacion(mes)}.`);
//6.
function mayor(num1,num2,num3){
    let mayor;
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }
    return mayor
}
console.log(`${mayor(1,2,3)}`);
//7.
function oferta(docena){
    const precio = 60000
    let precioTotal=0;
    let oferta=0;
    if(docena > 10){
        precioTotal = precio * docena
        oferta = (precioTotal * 0.20)
        return `el precio total es de ${precioTotal} y la oferta es de ${oferta} precio a pagar : ${precioTotal-oferta}`
    }else if(docena >=5){
        precioTotal = precio * docena
        oferta = (precioTotal * 0.15)
        return `el precio total es de ${precioTotal} y la oferta es de ${oferta} precio a pagar : ${precioTotal-oferta}`   
    }else if(docena >1){
        precioTotal = precio * docena
        oferta = (precioTotal * 0.10)
        return `el precio total es de ${precioTotal} y la oferta es de ${oferta} precio a pagar : ${precioTotal-oferta}`      
    }else{
        precioTotal = precio * docena
        return `el precio total es de ${precioTotal} No tiene oferta`      
    }
}
console.log(oferta(11))
