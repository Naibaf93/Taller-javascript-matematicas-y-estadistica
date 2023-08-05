const btn = document.querySelector ('#calcular');
const inputPrice = document.querySelector ('#price')
const inputCoupon = document.querySelector ('#coupon')
const priceResult = document.querySelector ('#result')

btn.addEventListener('click' , calcularPrecioConDescuento);

const arrayUObjeto = undefined; //['cupones' : descuento] {}?


/*
--------UTILIZANDO OBJETOS-------
const couponsObject = {
    'cupon1':30,
    'cupon2':25,
    'cupon3':20,
};

*/

/*------UTILIZANDO ARRAYS------*/

const couponArray = [];
couponArray.push({
  name: 'descuento30',
  discount: 30, 
})
couponArray.push({
    name: 'descuento25',
    discount: 25, 
})
couponArray.push({
    name: 'descuento20',
    discount: 20, 
})
couponArray.push({
    name: 'descuento15',
    discount: 15, 
})
function calcularPrecioConDescuento() { 
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const coupon = (inputCoupon.value);

    if (!price || !coupon) {
        priceResult.innerText = 'por favor llena el formulario';
        return;    
    }

    function isCouponInArray(couponElement) {
        return couponElement.name == coupon;
      }
      console.log(isCouponInArray);

      /*utilizamos el método .find para preguntarle al array couponArray si alguno de los objetos con propiedad 'name' coincide con lo que escribieron los usuarios en inputCoupon */  

    const couponInArray = couponArray.find(isCouponInArray);
    console.log(couponInArray); 

    let discount;

    if (couponInArray) {
        discount = couponInArray.discount;
      } else {
        priceResult.innerText = 'El cupón no es valido';
        return;
      }

/*
-------CONDICIONAL USANDO OBJETOS-------------
    if (couponsObject[coupon]) {
        discount = couponsObject[coupon];
    } else {
        priceResult.innerText = 'El cupón no es valido';
        return;
    }

    

   
   
   ------USANDO CONDICIONAL if---------

   if (coupon == 'fabian_es_spiderman') {
        discount = 30;
    } else if (coupon == 'no_le_digas_a_nadie') {
        discount = 20;
    } else {
        priceResult.innerText = 'El cupón no es valido';
        return;
    }


    -----CON SENTENCIA SWITCH-------
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