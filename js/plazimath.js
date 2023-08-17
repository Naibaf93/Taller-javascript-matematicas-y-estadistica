function esPar(array) {
    return !(array.length % 2);
}

function esImpar(array) {
    return array.length % 2;
}

function cacularMediana(array) {
    const listaEsPar = esPar(array);

    if (listaEsPar) {
        // const indexMitad1ListaPar = (array.length / 2) - 1;
        // const indexMitad2ListaPar = array.length / 2;
        const mitad1ListaPar = array[(array.length / 2) - 1];
        const mitad2ListaPar = array [array.length / 2];
        
        const listaMitades = [mitad1ListaPar, mitad2ListaPar];
        return calcularPromedio(listaMitades)
    } else {
        const indexMitadListaImpar = Math.floor(array.length / 2);
        const medianaListaImpar = array[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

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

function ordenarLista(listaDesornedada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        // if(valorAcumulado > nuevoValor) {
        //     return 1;
        // } else if(valorAcumulado == nuevoValor) {
        //     return 0;
        // } else if(valorAcumulado < nuevoValor) {
        //     return -1;
        // }

        return valorAcumulado - nuevoValor;
    } 
    
    const lista = listaDesornedada.sort(ordenarListaSort);

    return lista;
}