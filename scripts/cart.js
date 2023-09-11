$(function(){
    let storeId = 2;
    products.forEach(product =>{
        if(product.id === storeId){
            $(".cart-name").append(`<p>${product.title}</p>`);
            $(".cart-price").append(`<p>RM ${product.deposit}</p>`);
            let q = 2;
            $(".cart-quantity").append(`<p>${q}</p>`);
            subTotal = q * product.deposit;
            $(".cart-subtotal").append(`<p>RM ${subTotal}</p>`);
        }
    });
})