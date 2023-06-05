
// ejercicio 1
/*function multiplicacion(numero){
for (let multiplicador = 1; multiplicador <= 10; multiplicador++)
console.table(`${numero} x ${multiplicador} = ${numero * multiplicador}`)
}

multiplicacion(7)*/

// Ejercicio 2
/*

let numero
let numeroDos = 0



while (numero != 0){
   numero = parseInt(prompt("ingrese un numero"))
   numeroDos = numeroDos + numero
}



// Ejercicio 3
let numeroIngresado
let intentos = 0

while (numeroIngresado != numeroDos){
      numeroIngresado = parseInt(prompt("adivine el numero entre 1 y 100"))
      intentos += 1
   if ( numeroIngresado > numeroDos){
      alert("numero ingresado es mayor al numero incognito")
   }else if (numeroIngresado < numeroDos){
      alert("El numero ingresado es menor al numero incognito")
   }else if (numeroIngresado == numeroDos){
      alert(`¡Felicitaciones! lo haz logrado en ${intentos} intentos`)
   }
   }*/

//Ejercicio 4
/*let numero = prompt("indique un numero")

for (let divisor =1; divisor <= numero; divisor++ )
   if (numero % divisor == 0){
      console.log(divisor)
   }*/

   // Ejercicio 5
/*let frutas  = ["platano", "manzana", "pera", "piña", "limon", "naranja", "ciruela", "papaya", "pepino dulce", "uva"]

for (let nombreDeFrutas of frutas)
console.log(nombreDeFrutas)


//ejercicio 6
let numeros = [1,3,5,7,6,2,10,15,40,80]
for (let numeroDos of numeros)
console.log(numeroDos * 2)*/

// ejercicio 7

/*let familia = [
   {
      nombre: "Javier",
      edad: 38,
      parentesco: "el padre",
      signoZodiacal: "cancer"
   },
   {
      nombre: "Juanita",
      edad: 36,
      parentesco: "la mama",
      signoZodiacal: "leo"
   },
   {
      nombre: "Diego",
      edad: 19,
      parentesco: "el hijo",
      signoZodiacal: "escorpio"
   },
   {
      nombre: "Francisca",
      edad: 17,
      parentesco: "la hija",
      signoZodiacal: "pisis"
   },
   {
      nombre: "Lucas",
      edad: 31,
      parentesco: "el tio",
      signoZodiacal: "virgo"
   }
]

for (let miembro of familia)
   console.log(`Soy ${miembro.nombre}, tengo ${miembro.edad} años, soy ${miembro.parentesco}`)
*/
   //Ejercicio 8
   
   /*let numeros =[13, 15, 18, 45, 50, 52, 99, 100, 87, 44]
   for (let numero of numeros)
   if (numero % 2 !== 0){
console.log(numero)}*/

//Ejercicio 9
/*let numeroImpar = 0
let numeroPar   = 0
let numero

while (numero != 0){
   numero = parseInt(prompt("ingrese un numero"))
   if (numero % 2 != 0){
      numeroImpar += numero
   }else if (numero % 2 === 0){
      numeroPar += numero
   }
   }

alert("suma numero impar = " + numeroImpar)
alert("suma numero par = " + numeroPar)*/

//Ejercicio 10
let numeros =[13, 15, 18, 45, 50, 52, 99, 97, 87, 44]
let numeroMasGrande = 0
for (let numero of numeros)
   if (numero > numeroMasGrande){
   numeroMasGrande = numero}
   alert(numeroMasGrande)

