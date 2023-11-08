// PRODUCTOS

const products = [
    {
        id: 1,
        title: 'CUBE NUROAD EX R29',
        thumbnail:"img/CUBEruta_nuroadpro-r29m-aluminio.png",
        span: 'NUEVO',
        price: 800000,
    },
    {
        id: 2,
        title: 'MÉRIDA BIG NINE 400 R29',
        thumbnail:"img/MERIDA_bignine15-r29l-aluminio-verde.png",
        span: 'NUEVO',
        price: 389000,
    },
    {
        id: 3,
        title: 'TOPMEGA SUNSHINE R29',
        thumbnail:"img/TOPMEGA_sunshine-r29s-aluminio.png",
        span: 'NUEVO',
        price: 372500,
    },
    {
        id: 4,
        title: 'VENZO ATIX EX R29',
        thumbnail:"img/VENZO_atix-ex-r29l-aluminio.png",
        span: 'NUEVO',
        price: 420000,
    }];



//Creación del contenedor Productos

const contenedor = document.createElement('section');
for (const product of products){
    
    contenedor.innerHTML += `
                        <article id='${product.id}' class="product" >
                            <div>
                                <img src="${product.thumbnail}" alt= ""</img>
                                <p><span>${product.span}</span></p>
                            </div>
                            <p class="product-title">${product.title}</p>
                            <p class="product-price">$${product.price}</p>
                            <button class = "market-btn" onclick="agregarAlCarrito(${product.id})"id"agregar-${product.id}"=>Agregar al carrito</button>
                        </article>`;
                        document.body.append(contenedor); 
};


//Borrar datos

function borrarBicicleta(id){
    const index = carrito.findIndex((item)=>item.id===id);

    if (index !== -1){

        carrito.splice(index,1);
        localStorage.setItem('carrito',JSON.stringify(carrito));
        
        const carritoElement =document.querySelector('.carrito');
        const itemElement = document.getElementById(id);

        if(itemElement){
            itemElement.remove();
        }
        
    }
    mostrarCarrito();
}


//Función para agregar al carrito (consola)
const carrito =[];


function agregarAlCarrito(id) {
    const bicicleta = products.find((product)=>product.id === id);
    if(bicicleta && !carrito.some((item) => item.id === id)){
        carrito.push(bicicleta);

        localStorage.setItem('carrito',JSON.stringify(carrito)); 
        console.log(carrito)
    }
}




// Agregar al carrito (web)

function mostrarCarrito(){
    const carritoHtml = document.querySelector('.carrito')
    carritoHtml.innerHTML = '';
    
    const carritoLS = JSON.parse(localStorage.getItem('carrito'));
    

    carritoLS.forEach((item) => {
        const carritoItem = document.createElement('div');
        carritoItem.classList.add('carrito-item');
        carritoItem.innerHTML =`
        <article id='${item.id}' class="carrito-container" >
            <div class="carrito-body">
                <img class="img-cart" src="${item.thumbnail}" alt= ""</img>
                <p class="title-cart">${item.title}</p>
                <p class="price-cart">$${item.price}</p>
                <button class="borrar-button" data-id=${item.id}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg></button>

            </div>
            
        </article>`;
        

        const deleteBtn = carritoItem.querySelector('.borrar-button');
        deleteBtn.addEventListener('click',()=>{
            borrarBicicleta(item.id);
        })

        carritoHtml.appendChild(carritoItem);
    });
}
mostrarCarrito();

