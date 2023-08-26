// clase y metodo estatico
// class PlatziMath {
//     static esPar() {}
//     static esImpar() {}
//     static calcularModa() {}
//     static cacularMediana() {}
//     static calcularPromedio() {}
//     static ordenarLista() {}
// }

const PlatziMath = {};

PlatziMath.esPar = function esPar(array) {
    return !(array.length % 2);
}

PlatziMath.esImpar = function esImpar(array) {
    return array.length % 2;
}

PlatziMath.calcularModa = function calcularModa(array) {
    const listaCount = {};

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if(listaCount[element]) {
            listaCount[element] += 1;
        } else {
            listaCount[element] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1)
    const listaMaxNumber = listaOrdenada[listaOrdenada.length -1];
    // console.log(listaCount, listaArray, listaOrdenada, listaMaxNumber);
    console.log('La moda es: ' + listaMaxNumber[0]);

}

PlatziMath.cacularMediana = function cacularMediana(listaDesornedada) {
    const array = ordenarLista(listaDesornedada);
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

PlatziMath.calcularPromedio = function calcularPromedio(array) {
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

PlatziMath.ordenarLista = function ordenarLista(listaDesornedada) {
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

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesornedada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];
    } 
    
    const lista = listaDesornedada.sort(ordenarListaSort);
    return lista;
}