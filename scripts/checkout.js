$(function(){
    let itemsubtotal = 0;
    for(let i=0; i<currentUser.cart.length; i++){
        const deposit = parseInt(currentUser.cart[i].deposit.split(" ")[1]);
        const rental = parseInt(currentUser.cart[i].rental.split(" ")[1]);
        const sum = deposit + rental;
        let quantity = currentUser.cart[i].quantity;
        let subtotal = sum*quantity;
        itemsubtotal += subtotal
        $(".checkout-name").append(`<p class="my-2">${currentUser.cart[i].title}</p>`);
        $(".checkout-price").append(`<p class="my-2">RM ${sum}</p>`);
        $(".checkout-quantity").append(`<p class="my-2"> ${quantity}</p>`);
        $(".checkout-subtotal").append(`<p class="my-2" >RM ${subtotal}</p>`);

    };


    $(".Checkout-subtotal").append(`<p class="my-2" > RM ${itemsubtotal.toFixed(2)}</p>`);
    let checkouttotal =  itemsubtotal + 5;
    $(".Checkout-total").append(`<p class="my-2"  > RM ${checkouttotal.toFixed(2)}</p>`);

    
})
