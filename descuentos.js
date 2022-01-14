function CalcularDescuento(precio, descuento){
    const porcentajeDescuento = 100- descuento;
    const precioConDescuento =  (precio * porcentajeDescuento)/100;
    return precioConDescuento;
}
 function onClickButton(){
     const inputPrice = document.getElementById("InputPrice");
     const priceValue = inputPrice.value;
     const inputDiscount = document.getElementById("InputDiscount");
     const discountValue = inputDiscount.value;
    
     const precioConDescuento = CalcularDescuento(priceValue, discountValue);
     const resultPrice = document.getElementById("ResultPrice");
     resultPrice.innerText = "El Total a pagar es: $"+ precioConDescuento;
}
function  onClickButtonCoupon(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let  descuento;
    if(priceValue === " "){
        alert("Campos vacios");
    }else{
        switch (couponValue){
            case "Batman":descuento = 15; 
            break;
            case "Superman": descuento = 30;
            break;
            case "Hulk": descuento = 45;
            break;
            default: alert("Cupón no valido");
        }
    const precioConDescuento =  CalcularDescuento(priceValue, descuento);
    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "Gracias por usar un cupón: $"+ precioConDescuento;
    }
}