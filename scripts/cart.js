$(function(){

    (currentUser.cart).forEach((storedId) =>{
        for(let i=0;i<products.length;i++){
            if(products[i].id === storedId){
                $(".cart-name").append(`<p class="my-2">${products[i].title}</p>`);
                $(".cart-price").append(`<p class="my-2">RM ${products[i].deposit}</p>`);
                const quantityInputHtml = `<input type="number" class="form-control quantity my-2" data-id="${products[i].id}" value="1" min="1">`;
                $(".cart-quantity").append(quantityInputHtml);
                $(".cart-subtotal").append(`<p class="subtotal my-2" data-id="${products[i].id}">RM ${products[i].deposit}</p>`);
                const updateSubtotal = () => {
                    const quantity = parseInt($(`.quantity[data-id="${products[i].id}"]`).val());
                    const subTotal = quantity * products[i].deposit;
                    $(`.subtotal[data-id="${products[i].id}"]`).text(`RM ${subTotal}`);
                    console.log(quantity);
                };
                updateSubtotal();
                $(`.quantity[data-id="${products[i].id}"]`).on('change', updateSubtotal);
                break;
            }
        }
    });

    (currentUser.wishlist).forEach((storedId) =>{
        for(let i=0;i<products.length;i++){
            if(products[i].id === storedId){
                $(".wishList-name").append(`<p class="my-2">${products[i].title}</p>`);
                $(".wishList-price").append(`<p class="my-2">RM ${products[i].deposit}</p>`);
                break;
            }
        }
    });
})
