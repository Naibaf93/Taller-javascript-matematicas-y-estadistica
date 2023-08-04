const btn = document.querySelector ('#calcular');
const inputPrice = document.querySelector ('#price')
const inputCoupon = document.querySelector ('#coupon')
const priceResult = document.querySelector ('#result')

btn.addEventListener('click' , calcularPrecioConDescuento);

const arrayUObjeto = undefined; //['cupones' : descuento] {}?

function calcularPrecioConDescuento() { 
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const coupon = (inputCoupon.value);

    if (!price || !coupon) {
        priceResult.innerText = 'por favor llena el formulario';
        return;    
    }

    let discount;

    if (coupon == 'fabian_es_spiderman') {
        discount = 30;
    } else if (coupon == 'no_le_digas_a_nadie') {
        discount = 20;
    } else {
        priceResult.innerText = 'El cupón no es valido';
        return;
    }
/*
    switch (coupon) {
        case 'fabian_es_spiderman':
            discount = 30;
            break;
        case 'no_le_digas_a_nadie':
            discount  = 20;
            break;
        default:
            priceResult.innerText = 'El cupón no es valido';
            return;
    }
    */


    const newPrice = (price *(100 - discount)) / 100;

    priceResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
} 