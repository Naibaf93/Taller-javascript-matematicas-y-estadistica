function calcularPromedio(array) {
    //sumar todos los elementos del array / cantidad de elementos
    // let sumaArray = 0;

    // for (let i = 0; i < array.length; i++) {
    //     sumaArray = sumaArray + array [i];
    // }

    function sumarElementos (valorAcumulado, nuevoValor ) {
        return valorAcumulado + nuevoValor;
    }

    const sumaArray = array.reduce(sumarElementos);
    const promedio = sumaArray / array.length;
    return promedio;
    console.log(promedio);
    
    //array.length
}