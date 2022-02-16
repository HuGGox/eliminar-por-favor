// console.log('holis🤣');

// let nombreUsuario = "roberto";
// let edadUsuario = 33;
// let nacionalidadUsuario = "inglesa";
// let estadoUsuario = "soltero";
// console.log("Su nombre es:" , nombreUsuario);
// console.log("Su edad es:" , edadUsuario);
// console.log("Su nacionalidad es:" , nacionalidadUsuario);
// console.log("Su estado es:" , estadoUsuario);
// -----------------------------------
// let numeroUno = prompt("escribe un numero 1");
// let numeroDos = prompt("escribe un numero 2");
// // Tambien se puede escribir
// let numeroDos = parseInt(prompt("escribe un numero 2"));
// console.log(typeof numeroUno);
// ----------------------------------
// let resultado = parseInt(numeroUno) + parseInt(numeroDos);
// let resultado = numeroUno + numeroDos;
// console.log(resultado);
// ----------------------------------
// let stringUsuario = prompt ('Escriba "Javascript"');

// if(stringUsuario === 'Javascript'){
//     console.log('correcto');   
// }
// else {
//     console.log('falso');
// }
// ---------------------------------
// let numUsuario = parseInt(prompt('ingrese un numero del 1 al 10'));

// if(numUsuario <= 10 ){
//     console.log('perfecto');
// }
// else{
//     console.log('mal, era del 1 al 10');
// }
// --------------------------------
// let opcionUsuario = prompt (`
// Elija una opcion:
// 1. Libros
// 2. Peliculas
// 3. Juegos
// `);
// console.log(opcionUsuario);

// switch(opcionUsuario){
//     case '1':
//         console.log('principito')
//     break;
//     case '2':
//         console.log('matrix')
//     break;
//     case '3':
//         console.log('NFS')
//     break;
//     default:
//         console.log('Opcion no valida papux')
//     break;
// };

// -----------------------------------

// let numero = 1

// while( numero <= 10){
//     console.log(numero);
//     // numero = numero + 1; esto tambien se escribe de la siguiente manera, aplica a negativo
//     numero ++;

// }

// console.log('fin numero', + numero);

// --------------------------------------

// let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1; 

//     console.log(numeroMaquina);

// let vidas = 3;

// let numeroUsuario = parseInt(prompt('Adivine el numero del 1 al 10'));

// while(numeroMaquina !== numeroUsuario && vidas > 1){

//     let mensaje = (numeroMaquina > numeroUsuario) ? 'el numero es mayor' : 'el numero es menor'

//     console.log('Erraste, ' + mensaje);
//     numeroUsuario = parseInt(prompt('del 1 al 10'));
//     vidas --

// }


// if ( numeroMaquina === numeroUsuario){
//     console.log('ganaste papu');
// }else {
//     console.log('tkb ñery');
// }
// ------------------------------------------
// let frutas = ['platano', 23, 'uva'];
// console.log(frutas);
// console.log(frutas.length);
// console.log(frutas[1]);

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for (let fruta of frutas) {
//     console.log(fruta);
// }
// ----------------------------------------------
// let nombreUsuario = "Roberto"

// for (let letra of nombreUsuario) {
//     console.log(letra);
// }



// function saludar (nombreUsuario) {
//     return ('holis ' + nombreUsuario);
// }

// console.log(saludar("ricar2"))
// ------------------------------------------
// function sumar(n1, n2){
//     return parseInt(n1) + parseInt(n2)
// }

// let numUno = prompt("Ingrese un numero");
// let numDos = prompt("Ingrese otro numero");

// console.log(sumar(numUno, numDos));
// -------------------------------------------


// let nombreUsuario = "Ricar2";

// console.log(``);

// let nombreUsuario = "ricar2"
// console.log ("\n Bienvenido : \n " + nombreUsuario + "\n");

// ----------------------------------
// let nombreUsuario = "Ricar2";
// let estado = true;

// console.log(`bienvenido ${nombreUsuario.toUpperCase()}`);
// console.log(`
// ${estado ? "en linea" : "offline"}
// `);
// ----------------------------------
// var nombreUser = "ricar2";
// var nombreUser = "ricky";
// console.log(nombreUser);
// ----------------------------------------
// let estado = true;

// if (estado) {
//     console.log('Entro al if');
//     let estado = false;
//     console.log(estado);
// }

// console.log(estado);
// --------------------------------------
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log(i)
// --------------------------------------


// const estado = true;
// const estado = false;

// console.log(estado);

// -----------------------------

// for (const i = 0; i < 10; i++) {
//         console.log(i)}

// --------------------------------

// const estado = true;

// if ( estado ) {
//     const estado = false;
//     console.log(estado);
// }
// console.log(estado);

// ----------------------------


// const frutas = []
// frutas[0] = 'sandia';

// console.log(frutas);

// -----------------------------------

// const frutas = []
// const fruta = prompt('🍒 Feria Market 🍉 ¿qué fruta desea comprar?')

// frutas.push(fruta)

// while (confirm('¿Desea agregar otro elemento al 🛒?')) {
//     const fruta = prompt('¿qué fruta desea comprar?')
//     frutas.push(fruta)
// }

// console.log('Ustede compró: ')
// for (let fruta of frutas) {
//     console.log(fruta)
// }

// ------------------------------

// const miNumeroFlecha = (max) => {
// return Math.floor(Math.random() * (max - 1)) + 1;
// }

// console.log(miNumeroFlecha(11))

// Reducción:

// const miNumeroFlecha = max => Math.floor(Math.random() * (max - 1)) + 1;
    
// console.log(miNumeroFlecha(11))

// Reducción con paréntesis:

// const miNumeroFlecha = max => (Math.floor(Math.random() * (max - 1)) + 1);
    
// console.log(miNumeroFlecha(11))

// Más parámetros:

// const miNumeroFlecha = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// console.log(miNumeroFlecha(1, 11))

// Parámetros opcionales (también se puede hacer con function):

// const miNumeroFlecha = (min = 1, max = 10) => Math.floor(Math.random() * (max - min)) + min;

// console.log(miNumeroFlecha())

// --------------------------------------------


// const frutas = []
// const fruta = prompt('🍒 Feria Market 🍉 ¿qué fruta desea comprar?')

// frutas.push(fruta)

// while (confirm('¿Desea agregar otro elemento al 🛒?')) {
//     const fruta = prompt('¿qué fruta desea comprar?')
//     frutas.push(fruta)
// }

// console.log('Ustede compró: ')
// for (let fruta of frutas) {
//     console.log(fruta)
// }

// frutas.forEach( fruta => console.log(fruta) )
//              este es el parametro.  esto es lo que se retorna.


// ---------------------------------------

// let frutas = ["manzana", "banana", "sandia"];

// frutas.forEach((fruta, index, array) => {
//     console.log(`${index}: ${fruta}`);
//     console.log(array);
// })

// ------------------------------------------

// forEach()

//     (opens new window): El método forEach() ejecuta la función indicada una vez por cada elemento del array.

// let frutas = ["manzana", "sandía", "pera"]
// frutas.forEach(fruta => console.log(fruta))

// let frutas = ["manzana", "sandía", "pera"]
// frutas.forEach((fruta, index, array) => {
//     console.log(index)
//     console.log(fruta)
//     console.log(array)
// })

// En nuestro ejemplo de carrito de compras:

// const carrito = []
// const fruta = prompt('🍒 Feria Market 🍉 ¿qué fruta desea comprar?')

// carrito.push(fruta)

// while (confirm('¿Desea agregar otro elemento al 🛒?')) {
//     const fruta = prompt('¿qué fruta desea comprar?')
//     carrito.push(fruta)
// }

// console.log('Ustede compró: ')
// carrito.forEach((fruta, index) => (
//     console.log(`${index + 1}: ${fruta}`)
// ))

// ----------------------------------


const gato = {
    nombre: "valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
};

for(let propiedad in gato){
    console.log(propiedad);
}

    
    // comer: function () {
    //     console.log("gato comiendo");
    // },
//     comer(alimento) {
//         // console.log("gato comiendo: " + alimento);
//         console.log(`
//             ${nombre} esta comiendo ${alimento}
//         `);
//     }
// };
//     gato.comer("pez");



// console.log(gato.nombre);
// console.log(gato["nombre"]);
// console.log(gato.duerme);
// console.log(gato["enemigos"][0]);
// console.log(gato.enemigos[0]);

// gato.color = "azul";

// gato.edad = 5;

// delete gato.duerme;

// console.log(gato);

// console.log(gato.hasOwnProperty("edad"));

// console.log(gato.hasOwnProperty("edadDos"));

// if (gato.hasOwnProperty("nombre")){
//     gato.nombre = "flojera";
// }

// console.log(gato);