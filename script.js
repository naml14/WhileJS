//Ejercicio 1
let numero = parseInt(prompt("Ingrese un número por favor"));
if (numero < 5 || isNaN(numero)) {
    alert("El número es menor que 5 así que no se puede encontrar múltiplos de 5")
} else {
    let index = 1;
    let multiplos = [];
    do 
        {
            if(index % 5 == 0) {
                multiplos.push(index);
            }
        index++;
    } while (index <= numero)alert(`Estos son los números multiplos de 5 desde el 1 hasta el ${numero}: ${multiplos}`)
}
//Ejercicio 2
let num1 = parseInt(prompt("Ingrese el primer número entre 1 y 50, Si no es un número estará en un bucle inf" +
        "inito"))
while (isNaN(num1) || num1 < 1 || num1 > 50) {
    num1 = parseInt(prompt("Ingrese el primer número entre 1 y 50, Si no es un número estará en un bucle inf" +
            "inito"))
}
let num2 = parseInt(prompt("Ingrese el segundo número entre 1 y 50, Si no es un número estará en un bucle in" +
        "finito"))
while (isNaN(num2) || num2 < 1 || num2 > 50) {
    num2 = parseInt(prompt("Ingrese el segundo número entre 1 y 50, Si no es un número estará en un bucle in" +
            "finito"))
}
let index = 1;
while (index <= 50) {
    if (index == num1 || index == num2) {
        console.log(index + " Lotería!")
    } else {
        console.log(index)
    }
    index++;
}
//Ejercicio 3
let num = parseInt(prompt("Ingrese un número, si quiere terminar introduzca el número 0"))
let arrayNum = [];
while (num != 0) {
    while (isNaN(num)) {
        num = parseInt(prompt("Ingrese un número, si quiere terminar introduzca el número 0"))
    }
    arrayNum.push(num)
}
alert(`Estos son todos los números introducidos ${arrayNum}`)
//Ejercicio 4
let entrada = prompt("ingrese letras o palabras");
let arrayEntrada = [];
while (entrada != null && entrada != '') {
    if (isNaN(parseInt(entrada))) {
        arrayEntrada.push(entrada);
    }
    entrada = prompt("ingrese letras o palabras");
}
let concatenación = "";
for (let i = 0; i < arrayEntrada.length; i++) {
    concatenación += arrayEntrada[i];
}
alert(concatenación)
//Ejercicio 5
let dia;
do {
    dia = prompt("ingrese un día de la semana").toLocaleLowerCase();
    while (dia != "lunes" && dia != "martes" && dia != "miercoles" && dia != "jueves" && dia != "viernes" && dia != "sabado" && dia != "domingo") {
        dia = prompt("ingrese un día de la semana").toLocaleLowerCase();
    }
    if (dia == "lunes") {
        alert("Inicio de semana")
    }
    if (dia == "martes") {
        alert("Segundo día")
    }
    if (dia == "miercoles") {
        alert("Vamos en la mitad")
    }
    if (dia == "jueves") {
        alert("Cerca del final")
    }
    if (dia == "viernes") {
        alert("¿Comienza el descanso?")
    }
    if (dia == "sabado") {
        alert("Estamos en fin de semana")
    }
    if (dia == "domingo") {
        alert("Ve a descansar")
    }
} while (dia != "domingo");