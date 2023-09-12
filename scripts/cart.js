$(function(){

    (currentUser.cart).forEach((cartItem) =>{
        const deposit = parseInt(cartItem.deposit.split(" ")[1]);
        const rental = parseInt(cartItem.rental.split(" ")[1]);
        const sum = deposit + rental;
        let quantity = cartItem.quantity;

        $(".cart-name").append(`<p class="my-2">${cartItem.title}</p>`);
        $(".cart-price").append(`<p class="my-2">RM ${sum}</p>`);
        $(".cart-quantity").append(`<input type="number" class="form-control quantity my-2" data-id="${cartItem.title}" value="${quantity}" min="1">`);
        $(".cart-subtotal").append(`<p class="subtotal my-2" data-id="${cartItem.title}">RM ${sum}</p>`);

        // handle quantity increase event
        $(`.quantity[data-id="${cartItem.title}"]`).on('change',()=>{

            //dynamically increase subtotal
            quantity = parseInt($(`.quantity[data-id="${cartItem.title}"]`).val());
            const subTotal = quantity * sum;
            $(`.subtotal[data-id="${cartItem.title}"]`).text(`RM ${subTotal}`);

            //update localStorage quantity
            const user = JSON.parse(localStorage.getItem(username)); // Retrieve the user object
            user.cart.forEach((user)=>{
                if(cartItem.title=)
            })
        })
    });

    (currentUser.wishlist).forEach((wishListItem) =>{
        const title = wishListItem.title
        const deposit = parseInt(wishListItem.deposit.split(" ")[1]);
        const rental = parseInt(wishListItem.rental.split(" ")[1]);
        const sum = deposit + rental;

        $(".wishList-name").append(`<p class="my-2">${title}</p>`);
        $(".wishList-price").append(`<p class="my-2">RM ${sum}</p>`);
    });

    const user = JSON.parse(localStorage.getItem(username)); // Retrieve the user object
    user.cart[0].quantity = 1;
    localStorage.setItem(username, JSON.stringify(user));
    console.log(user);
    // if (user && user.cart && user.cart[itemIndex]) {
    // user.cart[itemIndex].quantity = updatedQuantity;
    
    // // Step 3: Update the entire object in localStorage
    // localStorage.setItem('user', JSON.stringify(user));
    //}
})
