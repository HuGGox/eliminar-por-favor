// console.log('holis');

// console.log(document);

// console.log(document.title);


// console.log(document.getElementById("tituloWeb"));
// console.log(document.getElementById("tituloWeb").textContent);


// console.log(document.querySelectorAll(".container .text-danger"));


// const h1 = document.getElementById("tituloWeb");

// // h1.textContent = "nuevo texto desde JS";
// // h1.style.backgroundColor = "red";
// // h1.style.color = "white";

// const boton = document.querySelector('.btn-primary');

// boton.addEventListener("click", () => {
//     console.log("me diste click");
//     h1.textContent = "texto desde JS"
//     h1.style.color = "red"
// })

// --------------------------------------------------------------------
// const inputColor = document.querySelector('#inputColor');
// const btnVisualizar = document.querySelector('#btnVisualizar');
// const parrafoHexa = document.querySelector('#parrafoHexa');
// const cardColor = document.querySelector('#cardColor');


// btnVisualizar.addEventListener("click", () => {
//     console.log("me diste click crack");
//     console.log(inputColor.value);
//     parrafoHexa.textContent = inputColor.value;
//     cardColor.style.backgroundColor = inputColor.value;
    
//     navigator.clipboard
//         .writeText(inputColor.value)
//         .then(() => console.log("texto copiado"))
//         .catch((e) => console.log(e));
// });

// ----------------------------------------------------------------




// const lista = document.querySelector("#lista");
// const fragment = document.createDocumentFragment();
// const liTemplate = document.querySelector('#liTemplate'); //agarramos el template

// const arrayPaises = ["Peru", "Bolivia", "Colombia"]

// const clickPaises = (e) => console.log("me diste click", e.target);

// arrayPaises.forEach(pais => {

//     const clone = liTemplate.content.firstElementChild.cloneNode(true)
//     clone.querySelector('span').textContent = pais

//     clone.addEventListener("click", clickPaises)

//     fragment.appendChild(clone)
// })

// lista.appendChild(fragment);

// console.log(fragment);


// const clone = liTemplate.content.cloneNode(true); // lo clonamos

// clone.querySelector('.text-primary').textContent = "agregue a traves de un template"
// // le cambiamos el contenido
// lista.appendChild(clone);
// //lo insertamos







// ----------------------------------------------------------


// let template = "";

// arrayPaises.forEach((pais) => {
//     template += `
//     <li class="list">
//         <b>Pais:</b>
//         <span class="text-primary">${pais}</span>
//     </li>`
// })

// lista.innerHTML = template;

// -----------------------------------------

// arrayPaises.forEach((pais) => {
//     lista.innerHTML += `
//     <li class="list">
//         <b>Pais:</b>
//         <span class="text-primary">${pais}</span>
//      </li>`
// })

//esto causa reflow.

// --------------------------------------------

// arrayPaises.forEach(pais => {

//     const li = document.createElement('li')
//     li.className = 'lista'

//     const b = document.createElement('b')
//     b.textContent = "Pais: "

//     const span = document.createElement('span')
//     span.className = "text-primary"
//     span.textContent = pais

//     li.appendChild(b)
//     li.appendChild(span)

//     fragment.appendChild(li)


// })

// lista.appendChild(fragment)

// ---------------------------------------------------

// arrayPaises.forEach(pais => {
//     const newNode = document.createElement('li');
//     newNode.textContent = pais;
    
//     const referenceNode = fragment.firstChild

//     fragment.insertBefore(newNode, referenceNode)
// });

// lista.appendChild(fragment);

// arrayPaises.forEach(pais => {
//     lista.innerHTML += `<li>${pais}</li>`
// })

// -------------------------------------------------------







// const carrito = document.querySelector('#carrito');
// const template = document.querySelector('#template');
// const fragment = document.createDocumentFragment();
// const btnesBotones = document.querySelectorAll('.card .btn');

// const carritoObjeto = {

// }

// const agregarCarrito = (e) => {
//     console.log(e.target.dataset.fruta);

//     const producto = {
//         titulo: e.target.dataset.fruta,
//         id: e.target.dataset.fruta,
//         cantidad: 1
//     }

//     if (carritoObjeto.hasOwnProperty(producto.titulo)){
//         producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1
//     }

//     carritoObjeto[producto.titulo] = producto;

//     pintarCarrito();

//     // console.log(carritoObjeto);

// };

// const pintarCarrito = ()=> {

//     carrito.textContent = ""
    
//     Object.values(carritoObjeto).forEach(item =>{
//         const clone = template.content.firstElementChild.cloneNode(true);
//         clone.querySelector('.lead').textContent = item.titulo
//         clone.querySelector('.badge').textContent = item.cantidad

//         fragment.appendChild(clone)
//     })

//     carrito.appendChild(fragment)

// }

// btnesBotones.forEach((btn) => btn.addEventListener("click", agregarCarrito));


// const frutas = ["🍌", "🍏", "🍓"];

// const nuevoArray = frutas.map((item) => {
//     return item
// })

// console.log(nuevoArray);

// ------------------------------------------------------------

// const carrito = document.querySelector("#carrito");
// const template = document.querySelector("#template");
// const footer = document.querySelector("footer");
// const templateFooter = document.querySelector("#templateFooter");
// const fragment = document.createDocumentFragment();

// document.addEventListener("click", (e) => {
//     // console.log(e.target.matches(".card .btn-outline-primary"));
//     if(e.target.matches(".card .btn-outline-primary")){
//         // console.log("ejecutar agregar al carro");
//         agregarCarrito(e);
//     }

//     // console.log(e.target.matches(".list-group-item .btn-success"));
//     if(e.target.matches(".list-group-item .btn-success")){
//         btnAumentar(e)
//     }

//     if(e.target.matches(".list-group-item .btn-danger")){
//         btnDisminuir(e)
// }});

// // Con document.addEventListener hacemos la delegacion de eventos, con el matches capturamos los botones, cada vez que apretamos los botones nos va a dar true, por lo tanto cuando nos de true porque esta dentro del if, invocamos una funcion, le pasamos el evento a la funcion porque necesitamos el e.target.dataset.fruta para construir nuestro objeto de producto, una vez que lo tenemos, con el indice verificamos si ya existe en el array de carritoArray, en caso de que no exista nos va a retornar el indice con el -1 y empujamos el elemento con el .push, si ya existe nos va a retornar el indice, por lo tanto podemos acceder a ese objeto en especifico a su propiedad cantidad y la modificamos, accedemos a su propiedad precio y lo multiplicamos y modificamos y pintamos el carritoArray. El fragment es para evitar el reflow, armamos primero nuestro template, toda la estructura la armamos en un fragment y luego que esta terminado el fragment lo inyectamos en el DOM. Antes de empezar a trabajar los template hay que clonarlos. Con querySelector seleccionamos el lead, nos fijamos que tiene de contenido de texto y lo modificamos con item.titulo, lo mismo hacemos con el precio.
// // Hicimos nuestro template, luego presionamos un boton y construimos de forma dinamica a travez del forEach, a cada uno de los botones le estamos agregando un ID en especifico, un item.id, ahora como ese elemento no sabemos si existe todavia, utilizamos la delegacion de eventos, capturando todo el documento, a travez del matches buscamos el boton en especifico (success o danger, .list-group-item .btn-success/danger) y cuando lo pinchamos nos da true, por lo tanto ahi mandamos la accion btnAumentar con el evento (e) en cuestion, y en el evento sabemos que tiene el target, sabemos que tiene el dataset con el id correspondiente.



// let carritoArray = [];

// const agregarCarrito = (e) => {
//     const producto = {
//         titulo: e.target.dataset.fruta,
//         id: e.target.dataset.fruta,
//         cantidad: 1,
//         precio: parseInt(e.target.dataset.precio),
//     }

//     // console.log(producto);



// const indice = carritoArray.findIndex((item) => item.id === producto.id);

// if (indice === -1) {
//     carritoArray.push(producto);
// } else {
//     carritoArray[indice].cantidad ++;
//     // carritoArray[indice].precio = carritoArray[indice].cantidad * producto.precio
// }

// console.log(carritoArray);

// pintarCarrito();

// };



// const pintarCarrito = () => {
//     carrito.textContent = "";

// carritoArray.forEach((item) => {
//     const clone = template.content.cloneNode(true);
//     clone.querySelector(".text-white .lead").textContent = item.titulo;
//     clone.querySelector(".rounded-pill").textContent = item.cantidad;
//     clone.querySelector("div .lead span").textContent = item.precio * item.cantidad;

//     clone.querySelector('.btn-danger').dataset.id = item.id;
//     clone.querySelector('.btn-success').dataset.id = item.id;
//     fragment.appendChild(clone);
// });

// carrito.appendChild(fragment);

// pintarFooter();

// };

// const pintarFooter = () => {
//     console.log("pintar footer");
//     footer.textContent = "";

//     const total = carritoArray.reduce((acc, current) => acc + current.cantidad * current.precio, 0)

//     const clone = templateFooter.content.cloneNode(true);
//     clone.querySelector("span").textContent = total;

//     footer.appendChild(clone);
// }

// const btnAumentar = (e) => {
//     console.log("me diste click", e.target.dataset.id);
//     carritoArray = carritoArray.map(item => {
//         if (item.id === e.target.dataset.id) {
//             item.cantidad ++
//         }
//         return item
//     })

//     pintarCarrito();
// }

// const btnDisminuir = (e) => {
//     console.log("me diste click", e.target.dataset.id);

//     carritoArray = carritoArray.filter(item => {
//         if(item.id === e.target.dataset.id){
//             if(item.cantidad > 0 ){
//                 item.cantidad--
//                 if(item.cantidad === 0) return
//                 return item
//             }
//         } else { return item }
//     })
//     pintarCarrito();
// }

// };
// -------------------------------------------------------------


// const padre = document.querySelector(".border-primary");
// const hijo = document.querySelector(".border-secondary");
// const nieto = document.querySelector(".border-danger");

// padre.addEventListener("click", () => {
//     console.log("me diste click padre");
// }, true);

// hijo.addEventListener("click", ()=>{
//     console.log("me diste click hijo");
// }, true);

// nieto.addEventListener('click', ()=>{
//     console.log("me diste click nieto");
// }, true);

// ---------------------------------------------------------


// const cajitas = document.querySelectorAll(".border");

// cajitas.forEach(caja => {
//     caja.addEventListener("click", (e) => {
//         e.stopPropagation();
//         console.log("me diste click");
//     })
// })

// -------------------------------------------

// const formulario = document.querySelector('form');

// formulario.addEventListener('submit', e => {
//     console.log("me diste click");
//     e.preventDefault();
// })

// -----------------------------------------------

// const container = document.querySelector('.container');

// container.addEventListener('click', e => {
//     console.log(e.target.id);

//     if (e.target.id === "padre"){
//         console.log("diste click al padre");
//     }

//     console.log(e.target.matches(".border-secondary"));

//     if(e.target.matches(".border-secondary")){
//         console.log("diste click al hijo");
//     }

//     console.log(e.target.dataset.div);
//     if(e.target.dataset.div === "divNieto"){
//         console.log("diste click al nieto");
//     }
// } );
// ------------------------------------------------------



// const regExp = /mcgyver/i

// const regExpObjeto = new RegExp("mcgyver", "i")

// console.log(regExp.test("mcgyver"));

// ---------------------------------------------------

// const formulario = document.querySelector("form");
// const userName = document.querySelector("input[name='userName']");
// const userEmail = document.querySelector("input[name='userEmail']");

// const alertSuccess = document.querySelector("#alertSuccess");
// const alertEmail = document.querySelector("#alertEmail");
// const alertName = document.querySelector("#alertName");


// const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
// const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


// const pintarMensajeExito = () => {
//     alertSuccess.classList.remove("d-none");
//     alertSuccess.textContent = "Mensaje enviado con exito."
// }

// const pintarMensajeError = (errores) => {
//     errores.forEach((item) => {
//         item.tipo.classList.remove("d-none");
//         item.tipo.textContent = item.msg;
//     })

// }

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();
//     alertSuccess.classList.add ("d-none");

//     const errores = [];

//     console.log(!userName.value.trim());

//     if(!regUserName.test(userName.value) || !userName.value.trim()) {
//         userName.classList.add("is-invalid");
//         errores.push({
//             tipo: alertName,
//             msg: "Formato no valido en el campo nombre, solo se permiten letras."
//         })
//     }else {
//         userName.classList.remove("is-invalid")
//         userName.classList.add("is-valid")
//         alertName.classList.add("d-none")
//     }

//     if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
//         userEmail.classList.add("is-invalid")
//         errores.push({
//             tipo: alertEmail,
//             msg: "Formato no valido en el campo email."
//         })
//     }else {
//         userEmail.classList.remove("is-invalid");
//         userEmail.classList.add("is-valid");
//         alertEmail.classList.add("d-none");

//     }

//     if(errores.length !== 0) {
//         pintarMensajeError(errores)
//         return
//     }

//     console.log("formulario enviado");
//     pintarMensajeExito(); 
// });

// ---------------------------------------------------


// const formulario = document.querySelector("#formulario");

// formulario.addEventListener("submit", e => {
//     e.preventDefault()

//     const inputs = new FormData(formulario);

//     for (let item of inputs){
//         console.log(item);
//     }

//     console.log(inputs.get("userName"));
//     console.log(inputs.get("userEmail"));

//     console.log("procesando formulario");
// })
// ----------------------------------------------------

// const posts = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "qui est esse",
//         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     },
// ];


// const findPostById = (id, callback) => {
//     const post = posts.find(item => item.id === id)

//     if(post){
//         callback(null, post)
//     }else {
//         //en el error
//         callback("no se encontro el post con id " + id);

//     }

// }

// findPostById(4, (err, post)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log(post);
// });

// ---------------------------------------------------------

// const posts = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "qui est esse",
//         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     },
// ];

// const findPostById = (id, callback) => {
//     const post = posts.find(item => item.id === id)

//     if(post){
//         callback(null, post)
//     }else {
//         //en el error
//         callback("no se encontro el post con id " + id);

//     }

// }

// // esto seria el "infierno de los callbacks"

// findPostById(1, (err, post)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log(post);

//     findPostById(2, (err, post) => {
//         if(err){
//             return console.log(err);
//         }
//         console.log(post);

//         findPostById(3, (err, post) => {
//             if(err){
//                 return console.log(err);
//             }
//             console.log(post);

//             findPostById(4, (err, post) => {
//                 if(err){
//                     return console.log(err);
//                 }
//                 console.log(post);
//             })
//         })
//     })
// });

// -----------------------------------------------------------------

// const posts = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "qui est esse",
//         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     },
// ];


// const findPostById = (id) => {
    
//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => {
//             const post = posts.find(item => item.id === id)
            
//             if(post){
//                 resolve(post)
//             }else {
//                 reject("no se encontro el id " + id)
//             }

//         }, 2000);
        

//     });
// }

// // findPostById(1)
// // .then((post) => {
// //     console.log(post)
// //     return findPostById(2)
// // })
// //     .then((post) => {
// //         console.log(post)
// //         return findPostById(3)
// //     })
// //     .then((post) => {
// //         console.log(post)
// //         return findPostById(4)
// //     })
// // .catch(e => console.log(e));

// // findPostById(1)
// // .then((post) => {
// //     console.log(post)
// // })
// // .catch(e => console.log(e));

// const buscar = async () => {
//     try {        

//         const resPosts = await Promise.all([
//             findPostById(1),
//             findPostById(2)
//         ])

//             console.log(resPosts[0].title, resPosts[1].title);


//             // const postUno = await findPostById(1)
//             // const postDos = await findPostById(2)
//             // console.log(postUno.title, postDos.title);

//     } catch (error){
//         console.log(error);
//     } finally {
//         console.log("se ejecuta si o si");
//     }


// }

// buscar();

// console.log("fin del codigo");

// ------------------------------------------------------------------



// const url = "https://jsonplaceholder.typicode.com/posts/"

// // fetch(url)
// //     .then((res) => res.json())
// //     .then(data => console.log(data))
// //     .catch(e => console.log(e))
// //     .finally(() => console.log("finalizo"));

// const findPostById = async (id) => {
//     try {

//         const res = await fetch(url + id)
//         const post = await res.json()
//         console.log(post);

//     } catch (error) {
//         console.log(error);
//     }
// }

// findPostById(21);

// --------------------------------------------------------


// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((res) => res.json())
//     .then(data => console.log(data.abilities[1].ability.name));

// -------------------------------------------------------------


// document.addEventListener("DOMContentLoaded", ()=> {
//     fetchData()
// });

// const fetchData = async (url = "https://rickandmortyapi.com/api/character") => {
//     // console.log("obtenien2 datos");
//     try {
//         loadingData(true);

//         const res = await fetch(url)
//         const data = await res.json();
//         // console.log(data);

//         pintarCard(data);

//     }catch (error) {
//         console.log(error);
//     } finally {
//         loadingData(false)
//     }
// }

// const pintarCard = data => {
//     const cards = document.querySelector("#card-dinamicas");
//     cards.textContent = ""
//     const templateCard = document.querySelector("#template-card").content
//     const fragment = document.createDocumentFragment();
//     // console.log(data);
//     data.results.forEach(item => {
//         // console.log(item);
//         const clone = templateCard.cloneNode(true);
//         clone.querySelector("h5").textContent = item.name;
//         clone.querySelector("p").textContent = item.species;
//         clone.querySelector("img").setAttribute("src", item.image);

        
//         // guardamos en el fragment para evitar el reflow
//         fragment.appendChild(clone);

//     });

//     cards.appendChild(fragment);

//     pintarPaginacion(data.info);
// } 

// const pintarPaginacion = data => {
//     console.log(data);
//     const paginacion = document.querySelector("#paginacion");
//     paginacion.textContent = ""
//     const templatePaginacion = document.querySelector("#template-paginacion").content

//     const clone = templatePaginacion.cloneNode(true);

//     if(data.prev){
//         clone.querySelector(".btn-outline-secondary").disabled = false;
//     }else {
//         clone.querySelector(".btn-outline-secondary").disabled = true;
//     }

//     if(data.next){
//         clone.querySelector(".btn-outline-primary").disabled = false;
//     }else {
//         clone.querySelector(".btn-outline-primary").disabled = true;
//     }

//     paginacion.appendChild(clone);

//     paginacion.addEventListener("click", e => {
//         if (e.target.matches(".btn-outline-primary")){
//             console.log("click");
//             if(data.next){
//                 fetchData(data.next)
//             }
//         }
//         if(e.target.matches(".btn-outline-secondary")){
//             console.log("click");
//             if(data.prev){
//                 fetchData(data.prev);
//             }
//         }
//     })
// }


// //pintar el loading
// const loadingData = (estado) => {
//     const loading = document.querySelector("#loading")
//     if(estado){
//         loading.classList.remove("d-none")

//     }else {
//         loading.classList.add("d-none")
//     }
// }


// Hicimos el consumo de una API publica a travez de la URL(un path/HTTP) un json, de forma nativa trabajando con fetch, le pasamos la URI/Path/HTTP/URL/etc y lo trabajamos en json. Una vez que tenemos la data, la pintamos a travez de los template y fragment para evitar el reflow porque tenemos un forEach de 20 elementos, una vez que tenemos los elementos modificamos el template, lo agregamos a nuestro sitio web. El loading sigue funcionando porque lo activamos antes del fetch, una vez que se hace la solicitud, termina la solicitud, en el finally lo pasamos a false.



// ----------------------------------------------------

// funcion constructora = plantilla = class 

// function Persona(nombre) {
//     this.nombre = nombre
//     this.saludar = function(){
//         return `${this.nombre} dice hola`
//     }
// }

// //aca estamos creando el objeto, NO ARRIBA.
// const juanito = new Persona("juanito")
// const pedrito = new Persona("pedrito")
// const carlitos = new Persona("carlitos")
// console.log(juanito.saludar());
// console.log(pedrito.saludar());
// console.log(carlitos.saludar());

// ----------------------------------------------------


// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre
//         this.edad = edad
//     }

//     get getNombre(){
//         return this.nombre;
//     }

//     set setNombre(nombre){
//         this.nombre = nombre;
//     }

//     saludar(){
//         return `${this.nombre} dice hola`;
//     }

//     static probarSaludo(nombre){
//         return `${nombre} proban2 saludo`;
//     }
// }
// //heredar los metodos y propiedades de persona en una nueva clase
// class Estudiante extends Persona {
    
//     #notas = []
    
//     //para poder extender las propiedades de nombre y edad al mismo tiempo que agregandole una nueva propiedad (en este caso notas) usamos super(con lo que vamos a mantener)
//     // constructor(nombre, edad, notas = []){
//     //     super(nombre,edad);
//     //     this.notas = notas;
//     // }

//     set setNotas(nota){
//         this.#notas.push(nota)
//     }

//     get getNotas(){
//         return this.#notas
//     }


//     // saludar() {
//     //     return `${this.nombre} desde estudiante`;
//     // }
// }

// const juanito = new Estudiante("juanito", 25);

// juanito.setNotas = 7
// juanito.setNotas = 5
// juanito.setNotas = 1

// console.log(juanito.getNotas);


// juanito.setNombre = "pedrito";
// console.log(juanito);
// console.log(Persona.probarSaludo("ricar2"));

// ---------------------------------------------------------

const formulario = document.querySelector("#formulario");
const cardsEstudiantes = document.querySelector("#cardsEstudiantes");
const cardsProfesores = document.querySelector("#cardsProfesores");
const templateEstudiante = document.querySelector("#templateEstudiante").content;
const templateProfesor = document.querySelector("#templateProfesor").content;

const estudiantes = []
const profesores = []

document.addEventListener("click", e => {
    // console.log(e.target.dataset.nombre);
    if(e.target.dataset.nombre){
        // console.log(e.target.matches(".btn-success"));
        if(e.target.matches(".btn-success")){
            estudiantes.map(item => {
                if(item.nombre === e.target.dataset.nombre){
                    item.setEstado = true
                }
                console.log(item);
                return item
            })
        }
        if(e.target.matches(".btn-danger")){
            estudiantes.map((item)=>{
                if(item.nombre === e.target.dataset.nombre){
                    item.setEstado = false
                }
                console.log(item);
                return item;
            })
        }
        Persona.pintarPersonaUI(estudiantes, "Estudiante")
    }
})

//resumen: Inicializamos un array vacio (estudiantes) porque ahi vamos a tener cada una de las instancias que se van a ir creando, luego tenemos nuestra instancia Padre que es Persona, que es el constructor tanto de nombre como de edad porque podemos utilizarlo para Profesor, Estudiante, etc. Hacemos un metodo estatico que puede ser accedido sin la necesidad de instanciar Persona, que es pintarPersonaUI, en caso de que sea Estudiante, limpiamos el contenido, hacemos un fragment y recorremos esa persona (Con el forEach) que son estudiantes[]. Recordemos que esos items son cada uno de los estudiantes que estan ahi adentro, y cada uno de esos estudiantes tienen un metodo que se llama agregarNuevoEstudiante, y eso retorna el clone. Con eso que retorno el clone, nosotros lo metemos en el fragment y una vez que termine de recorrer todos los estudiantes lo pintamos efectivamente en las cardsEstudiantes que es donde nosotros tenemos que pintarlo como HTML.

formulario.addEventListener('submit', e => {
    e.preventDefault()

    const datos = new FormData(formulario)
    const [nombre, edad, profesion] = [...datos.values()];

    if(profesion === "Estudiante"){
        const estudiante = new Estudiante(nombre, edad)
        estudiantes.push(estudiante)
        Persona.pintarPersonaUI(estudiantes, profesion)
    }
    if(profesion === "Profesor"){
        const profesor = new Profesor(nombre, edad)
        profesores.push(profesor)
        Persona.pintarPersonaUI(profesores, profesion)
    }

});

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    static pintarPersonaUI(personas, tipo){
        if (tipo === "Estudiante"){

            cardsEstudiantes.textContent = ""
            const fragment = document.createDocumentFragment()
            personas.forEach(item => {
                fragment.appendChild(item.agregarNuevoEstudiante())
            })

            cardsEstudiantes.appendChild(fragment);

        }

        if (tipo === "Profesor"){
            cardsProfesores.textContent = ""
            const fragment = document.createDocumentFragment()
            personas.forEach(item => {
                fragment.appendChild(item.agregarNuevoProfesor())
            })
            cardsProfesores.appendChild(fragment);
        }
    }

}


class Estudiante extends Persona{
    #estado = false
    #estudiante = "Estudiante"

    set setEstado(estado){
        this.#estado = estado
    }

    get getEstudiante(){
        return this.#estudiante
    }

    agregarNuevoEstudiante(){
        const clone = templateEstudiante.cloneNode(true);
        clone.querySelector("h5 .text-primary").textContent = this.nombre;
        clone.querySelector("h6").textContent = this.getEstudiante;
        clone.querySelector(".lead").textContent = this.edad;

        if(this.#estado){
            clone.querySelector(".badge").className = "badge bg-success"
            clone.querySelector(".btn-success").disabled = true
            clone.querySelector(".btn-danger").disabled = false
        }else {
            clone.querySelector(".badge").className = "badge bg-danger"
            clone.querySelector(".btn-danger").disabled = true
            clone.querySelector(".btn-success").disabled = false
        }

        clone.querySelector(".badge").textContent = this.#estado
        ? "Aprobado"
        : "Reprobado"

        clone.querySelector(".btn-success").dataset.nombre = this.nombre
        clone.querySelector(".btn-danger").dataset.nombre = this.nombre

        return clone
    }
}

class Profesor extends Persona{

    #profesor = "Profesor"

    agregarNuevoProfesor(){
        const clone = templateProfesor.cloneNode(true);
        clone.querySelector("h5").textContent = this.nombre
        clone.querySelector("h6").textContent = this.#profesor
        clone.querySelector(".lead").textContent = this.edad
        return clone
    }


}