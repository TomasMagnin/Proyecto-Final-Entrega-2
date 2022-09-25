// Creamos primero la clase constructora para crear objetos de nuestros productos y añadir
// sus especificaiones de forma dinamica.

class Products{
    constructor(info){
        this.id = info.id;
        this.brand = info.brand;
        this.model = info.model;
        this.year = info.year;
        this.price = info.price;
        this.img = info.img;
        this.stock = info.stock;
        this.sold = false;
    }
    vender(){
        this.stock = this.stock - 1;
        this.sold = true;
    }

    showCars(){
        return `Brand: ${this.brand} - Modelo: ${this.model} - Año ${this.year} - $ ${this.price} - Stock ${this.stock} `
    }
} 

// Pusheamos al Array cars, los objetos a partir de la clase constructor.

let cars = [];

cars.push(new Products({id: 1, brand: "AUDI", model: "A4", year: 2015, price: 25000, img: "./assets/images/Autos/Audi-A4-720-1.jpg", stock: 4,}));
cars.push(new Products({id: 2, brand: "BMW", model: "M4", year: 2012, price: 55000, img: "./assets/images/Autos/BMW-M4-720-1.jpg", stock: 2,}));
cars.push(new Products({id: 3, brand: "HONDA", model: "CIVIC", year: 2014, price: 65000, img: "../assets/images/Autos/Honda-Civic-720-1.jpg", stock: 8,}));
cars.push(new Products({id: 4, brand: "NISSAN", model: "GT-R", year: 2020, price: 13000, img: "../assets/images/Autos/Nissan-GTR-720-1.jpg", stock: 20,}));
cars.push(new Products({id: 5, brand: "MERCEDES BENZ", model: "GTS", year: 2016, price: 15000, img: "../assets/images/Autos/Audi-A4-720-1.jpg", stock: 10,}));
cars.push(new Products({id: 6, brand: "FORD", model: "F-150", year: 2015, price: 10000, img: "../assets/images/Autos/Ford-Raptor-720-1.jpg", stock: 15}));
cars.push(new Products({id: 7, brand: "CHEVROLET", model: "SILVERADO", year: 2010, price: 35000, img: "../assets/images/Autos/Chevrolet-Silverado-720-1.jpg", stock: 6}));
cars.push(new Products({id: 8, brand: "TOYOTA", model: "SUPRA", year: 2019, price: 45000, img: "../assets/images/Autos/Toyota-Supra-720-1.jpg", stock: 20}));
cars.push(new Products({id: 9, brand: "DODGE", model: "RAM", year: 2022, price: 30000, img: "../assets/images/Autos/Dodge-RAM-720-1.jpg", stock: 12}));

/* ---------- Creamos la funcion y evento para listar los productos---------- */      

let carrito = [];
let contenedor = document.getElementById("ListProdcuts");                       // Traemos el nodo que tiene el atributo product.
let butt1 = document.getElementById("btn1");                                    // Traemos el nodo que tiene el atributo btn1.
let butt2 = document.getElementById("btn2");                                    // Traemos el nodo que tiene el atributo btn1.


const listado = () => {                                                         // Creamos la funcion listado, para recorrer el array y llamarla mas adelante.
    cars.forEach(item => {                                                      // Recorremos todo el Array compuesto por objetos.
        let div = document.createElement("div");                                // Creamos un div para introducir el listado de productos.
        div.innerHTML = `
                        <div class="card" style="width: 18rem; d-flex flex-direction: row">
                            <img src=${item.img} class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title"> Marca: ${item.brand} </h5>            
                                <p class="card-text"> Modelo: ${item.model} </p>      
                                <p class="card-text"> precio $${item.price} </p>
                                <a href="#" id = "agregar${item.id}" class="btn btn-primary"> Carrito </a> 
                            </div>
                        </div>    
                        `;                                                      // introducimos en el HTML el listado de productos.
        contenedor.appendChild(div);                                            // Insertamos el contenido en la etiqueta div que se va creando anteriormente.
        addBtn = document.getElementById(`agregar${item.id}`)  
        addBtn.addEventListener("click", () => {
            addCarrito(item.id)
        })
    })
    };
    
    



butt1.addEventListener("click", listado);                                       // Utilizando el Evento Clic Creamos el listado de productos.
butt2.addEventListener("click",() => {                                          // Utilizando el Evento Clic Borramos el listado de productos.
contenedor.innerHTML  = "";
});


/* ---------- Carrito de compras---------- */

const addCarrito = item3 => {
    const itemID = cars.find((item2) => item2.id === item3)
    carrito.push(itemID);
    console.log(carrito);
};

/* cars.forEach(item3 => {
    addBtn = document.getElementById(`agregar${item3.id}`)  
    addBtn.addEventListener("click", () => {
    addCarrito(item3.id)
}); */



/* ---------------------------------------------------------------------------------------------------------------------------------------------- */

/* let contenedor = document.getElementById("ListProdcuts");                       // Traemos el nodo que tiene el atributo product.
let butt1 = document.getElementById("btn1");                                    // Traemos el nodo que tiene el atributo btn1.
let butt2 = document.getElementById("btn2");                                    // Traemos el nodo que tiene el atributo btn1.


const listado = () => {                                                         // Creamos la funcion listado, para recorrer el array y llamarla mas adelante.
    cars.forEach(item => {                                                      // Recorremos todo el Array compuesto por objetos.
        let div = document.createElement("div");                                // Creamos un div para introducir el listado de productos.
        div.innerHTML = `
                        <div class="card" style="width: 18rem; d-flex flex-direction: row">
                            <img src=${item.img} class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title"> Marca: ${item.brand} </h5>            
                                <p class="card-text"> Modelo: ${item.model} </p>      
                                <p class="card-text"> precio $${item.price} </p>
                                <a href="#" id = "agregar${item.id}" class="btn btn-primary"> Carrito </a> 
                            </div>
                        </div>    
                        `;                                                      // introducimos en el HTML el listado de productos.
        contenedor.appendChild(div);                                            // Insertamos el contenido en la etiqueta div que se va creando anteriormente.
        })
    };     
butt1.addEventListener("click", listado);                                       // Utilizando el Evento Clic Creamos el listado de productos.
butt2.addEventListener("click",() => {                                          // Utilizando el Evento Clic Borramos el listado de productos.
contenedor.innerHTML  = "";
}); */ 



/* ---------- Opcion Añadir un Producto ---------- */   
let newCar = []; 
let formulario1 = document.getElementById("form");                              // Traemos el nodo que tiene el atributgo form.
let contenedor2 = document.getElementById("products2");                         // Traemos el nodo que tiene el atributo product.


formulario1.addEventListener("submit", (e) => {                                 // Utilizando el evento "submit" creamos una funcion para extraer los datos tal cual fueron introducidos en la pagina.
    e.preventDefault();
    let formVar = e.target.children;
    let input1 = formVar[1].value.toUpperCase();                                // Asginamos a la variable  input1 el el valor(value) de la etiqueta(tag) en la posicion 1 del nodo padre "form", nos devuelve el texto tal cual lo escribimos.   
    //let input1 = document.getElementById("brandField").value;                 // Otra forma de traer el contenido del imput pero no se si es correcto.
    let input2 = formVar[4].value.toUpperCase();                                // Asginamos a la variable  input2 el el valor(value) de la etiqueta(tag) en la posicion 4 del nodo padre "form", nos devuelve el texto tal cual lo escribimos.
    let input3 = formVar[7].value;                                              // Asginamos a la variable  input3 el el valor(value) de la etiqueta(tag) en la posicion 7 del nodo padre "form", nos devuelve el texto tal cual lo escribimos.                   
    let input4 = formVar[10].value;                                             // Asginamos a la variable  input3 el el valor(value) de la etiqueta(tag) en la posicion 10 del nodo padre "form", nos devuelve el texto tal cual lo escribimos.
    let input5 = formVar[13].value;
    let input6 = formVar[16].value;
    cars.push(new Products({brand: `${input1}`, model: `${input2}`, year: `${input3}`, price: `${input4}`, img: `${input6}`,stock: `${input5}`, sold: false}));
    newCar.push(new Products({brand: `${input1}`, model: `${input2}`, year: `${input3}`, price: `${input4}`, img: `${input6}`,stock: `${input5}`, sold: false}));

    console.log(formVar);

    newCar.forEach(item  => {                                                      // Recorremos todo el Array compuesto por objetos.
        let div1 = document.createElement("div");                                // Creamos un div para introducir el listado de productos.
        div1.innerHTML =    `
                            <div class="card" style="width: 18rem; d-flex flex-direction: row">
                                <img src= ${item.img} class="card-img-top" alt="">
                                <div class="card-body">
                                    <h5 class="card-title"> Marca: ${item.brand} </h5>            
                                    <p class="card-text"> Modelo: ${item.model} </p>      
                                    <p class="card-text"> precio $${item.price} </p>
                                    <a href="#" id="agregar${item.id}" class="btn btn-primary "> Carrito </a> 
                                </div>
                            </div>    
                            `;                                                  // introducimos en el HTML el listado de productos.
        contenedor2.appendChild(div1);                                                 // Insertamos el contenido en la etiqueta div que se va creando anteriormente.
        })
    });
               
/* ---------- Opcion para buscar un Producto ---------- */      

let formulario2 = document.getElementById("form2");                             // Traemos el nodo que tiene el atributo form2.
let filters = document.getElementById("filter");                                // Traemos el nodo que tiene el atributo filter.

formulario2.addEventListener("submit", (e) => {                                 // Utilizando el evento "submit" creamos una funcion para extraer los datos tal cual fueron introducidos en la pagina.
    e.preventDefault();                                                         // Prevenimos que la pagina se recargue al dar click en submit.
    let findBrand = e.target.children;                                          // Capturamos las entradas del formulario y la asignamos a la variable findBrand, nos trae un HTML Collection.                           
    let brandValue = findBrand[0].value;                                        // Asginamos a la variable  brandValue el el valor(value) de la etiqueta(tag) en la posicion 0 del nodo padre "form2", nos devuelve el texto tal cual lo escribimos.   
    const result = cars.filter(car => car.brand === brandValue.toUpperCase());  // Usamos el Metodo Filter para que busque en el Array de productos la marca que necesitamos.

    result.forEach(item => {                                                    // Recorremos el array que nos entrego el metodo Filter.
        let div = document.createElement("div");                                // Creamos un div para introducir el listado de productos.
        div.innerHTML = `                                                       
                            <div class="card" style="width: 18rem; d-flex flex-direction: row">
                                <img src="${item.img}" class="card-img-top" alt="">
                                <div class="card-body">
                                    <h5 class="card-title"> Marca: ${item.brand} </h5>            
                                    <p class="card-text"> Modelo: ${item.model} </p>      
                                    <p class="card-text"> precio $${item.price} </p>
                                    <a href="#" class="btn btn-primary"> Carrito </a> 
                                </div>
                            </div>    
                        `;                                                      // introducimos en el HTML el listado del producto que filtramos.
        filters.append(div);                                                    // Insertamos el contenido en la etiqueta div que se va creando anteriormente.
        });
});            
 
/* ---------- Sesion de Usuario / Session Storage ---------- */

/* let usx = document.getElementById("formNav");
let usuario;                                                                    // Creamos la variable usuario
let usuarioStorage = sessionStorage.getItem("usuario");                         // Traemos del sessionStorage el contenido de la variable

if(usuarioStorage){                                                             // Si la variable tiene contenido.
    let mensaje = `Bienvenido ${usuarioStorage}`;                               // Entoces sale el cartel de saludo
    alert(mensaje);
}else{
    usuario = prompt("Ingrese su nombre");                                      // Ingresamos por consola el nombre y se le asigna a la variable usuario.
    sessionStorage.setItem("usuario", usuario);                                 // Guardamos en sessionStorage el contenido de la variable usuario.
    alert("Bienvenido es tu primera Vez");                                      // Imprimismo el contenido.
}

 */

/* ---------- Carrito de compras---------- */

