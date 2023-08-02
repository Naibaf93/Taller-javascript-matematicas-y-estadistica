const btn = document.querySelector ('#calcular');
const inputPrice = document.querySelector ('#price')
const inputDiscount = document.querySelector ('#discount')
const priceResult = document.querySelector ('#result')

btn.addEventListener('click' , calcularPrecioConDescuento);

function calcularPrecioConDescuento() { 
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if (!price || !discount) {
        priceResult.innerText = 'por favor llena el formulario';
        return;    
    }

    if (discount >= 100) {
        priceResult.innerText = 'ya quisieras...no te vamos a regalar el producto xd';
        return;    
    }

    const newPrice = (price *(100 - discount)) / 100;

    priceResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
} 