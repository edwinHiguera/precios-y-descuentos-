// funcion que hace las operaciones.
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento; 
}

//aqui se interactua con html.
 
function funcionConBoton(){
    const precio = document.getElementById("inputPrecio");
    const valuePrecio= precio.value;

    const etiquetaParrafo = document.getElementById("resultadoPrecio");

    //codigo de los cupones
    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value

    let descuentoCupon;

    switch (cuponValue) {
        case cuponesDescuento[0]: //hoy se bebe
            descuentoCupon = 10;
        break;

        case cuponesDescuento[1]: //hoy se gasta
            descuentoCupon = 15;
        break;

        case cuponesDescuento[2]: //hoy se fuma
            descuentoCupon = 20;
        break;

        case cuponesDescuento[3]: //como un rasta
            descuentoCupon = 25;
        break;

        case cuponesDescuento[4]: // si dio lo pelmite
            descuentoCupon = 40;
        break;
    }

    //VARIABLE QUE RESUELVE CON CUPONES
    const resultadoConCupon= calcularPrecioConDescuento(valuePrecio, descuentoCupon);
    etiquetaParrafo.innerText = `El precio aplicando el cupón es de: ${"$"}${resultadoConCupon}`;

}

const cuponesDescuento = [
   "HoySeBebe",
    "HoySeGasta",
    "HoySeFuma",
    "ComoUnRasta",
    "SiDioLoPelmite",
];





