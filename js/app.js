
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
                        <article class="product" id='${product.id}'>
                            <div>
                                <img src="${product.thumbnail}" alt= ""</img>
                                <p><span>${product.span}</span></p>
                            </div>
                            <p class="product-title">${product.title}</p>
                            <p class="product-price">$${product.price}</p>
                            <button class = "market-btn" onclick="agregarAlCarrito(${product.id})">Agregar al carrito</button>
                        </article>`;
                        document.body.append(contenedor); 
};


//Función para agregar al carrito (consola)
const carrito =[];


function agregarAlCarrito(id) {
    const bicicleta = products.find((product)=>product.id === id);
    if(bicicleta && !carrito.some((item) => item.id === id)){
        carrito.push(bicicleta);

        localStorage.setItem('carrito',(carrito));
        console.log(bicicleta)
    }
}
