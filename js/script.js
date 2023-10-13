
//INICIO DE SESION


alert('¡Bienvenido/a!\n Inicia sesión para continuar.')
let savedPin = '54';
let savedName = 'roxana'
function LOGIN(){
    let ingresar = false;
    let intentos = 1;
    for (let i = intentos; i>0; i--) {
        let userName = prompt('Ingresa tu nombre')
        let userPin = prompt('Ingresa tu contraseña');
        if (userPin === savedPin && userName === savedName ){
            alert('Ingreso exitoso.');
            ingresar =true;
            break;
        } else{
            alert('error, te quedan ' +(i-1)+' intentos.');
        }
    }
    return ingresar;
} 
// Al iniciar sesión, elige opciones 

if (LOGIN()){ 

    let opcion = prompt ('¡Bienvenido! \nElegí una opción: \n1- Mostar bicicletas disponibles. \n2- Agregar nuevo producto. \n Presioná Z para salir.');

    while ( opcion != 'Z' && opcion != 'z'){
        switch(opcion){
            case '1':{
                
                //ARRAYS
                const bicicletas=[
                    {
                        categoria: 'Mountain Bike',
                        marca:'Venzo',
                        modelo:'X-treme ',
                        especificaciones:'R29 carbono talle-M',
                        precio: 180000 ,
                    },
                    {
                        categoria: 'Ruta',
                        marca:'Trek',
                        modelo:'Doman E4',
                        especificaciones:'R29 Aluminio talle-L',
                        precio: 220000,
                },
                {
                    categoria: 'Urbana',
                    marca:'Trek',
                    modelo:'Verve 1',
                    especificaciones:'R29 Aluminio talle-M',
                    precio: 125000,
                }
            ];


            //FUNCION PARA MOSTRAR EN PANTALLA
            const mostrarBicicletas =() => {
                let mensaje = ' \n Bicicletas disponibles: \n ';
                bicicletas.forEach ((bicicleta) =>{
                    mensaje += `\n Categoria: ${bicicleta.categoria} \n Marca: ${bicicleta.marca}\n Modelo: ${bicicleta.modelo} \n Especificaciones: ${bicicleta.especificaciones} \n Precio: ${bicicleta.precio} pesos ars. \n -------------\n `
                });
                alert(mensaje)
                }
            alert(mostrarBicicletas())
        };



        case '2':{


            const agregarBicicleta =() => {

                const obtenerCategoria = () => {
                    let categoria=prompt('Ingrese categoria. \n Ejemplo: MTB, Ruta, Urbana.')
                    if (categoria === ''){
                        alert('La categoría no puede estar vacía.');
                        return obtenerCategoria()
                    }
                    return categoria;
                }


                const obtenerMarca = () => {
                    let marca=prompt('Ingrese marca.')
                    if (marca === ''){
                        alert('La marca no puede estar vacía.');
                        return obtenerMarca()
                    }
                    return marca;
                }


                const obtenerModelo = () => {
                    let modelo=prompt('Ingrese modelo.')
                    if (modelo === ''){
                        alert('El modelo no puede estar vacío.');
                        return obtenerModelo()
                    }
                    return modelo;
                }


                const obtenerEspecificaciones = () => {
                    let especificacion=prompt('Ingrese especificaciones.')
                    if (especificacion === ''){
                        alert('La especificacion no puede estar vacía.');
                        return obtenerEspecificaciones()
                    }
                    return especificacion;
                }


                const obtenerPrecio = () => {
                    let precio=prompt('Ingrese precio.')
                    if (precio === ''){
                        alert('El precio no puede estar vacío.');
                        return obtenerPrecio()
                    }
                    precio = parseFloat(precio);    

                    if (isNaN(precio)) {
                        alert('Por favor, ingrese un precio valido.');
                        return obtenerPrecio();
                    }
                    return precio;
                    }
                        

                    let categoria = obtenerCategoria();
                    let marca = obtenerMarca();
                    let modelo = obtenerModelo();
                    let especificaciones = obtenerEspecificaciones();
                    let precio = obtenerPrecio();
                    
                    
                    const nuevaBicicleta = {
                        categoria:categoria,
                        marca:marca,
                        modelo:modelo,
                        especificaciones:especificaciones,
                        precio:precio,
                    };
                    
                bicicletas.push(nuevaBicicleta)
                
            }
            agregarBicicleta()
            alert('bicicleta agregada al stock!')
        }

        opcion = prompt('\n Presioná "Z" para salir.');}
            };
};
                    console.log(LOGIN());

