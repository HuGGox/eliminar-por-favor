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


const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", e => {
    e.preventDefault()

    const inputs = new FormData(formulario);

    for (let item of inputs){
        console.log(item);
    }

    console.log(inputs.get("userName"));
    console.log(inputs.get("userEmail"));

    console.log("procesando formulario");
})