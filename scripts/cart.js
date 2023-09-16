$(function(){
    $(".check-out-btn").click(()=>{
        window.location.href = "checkout.html";
    })

    for(let i=0; i<currentUser.cart.length; i++){
        const deposit = parseInt(currentUser.cart[i].deposit.split(" ")[1]);
        const rental = parseInt(currentUser.cart[i].rental.split(" ")[1]);
        const sum = deposit + rental;
        let quantity = currentUser.cart[i].quantity;

        $(".cart-name").append(`<p class="my-2">${currentUser.cart[i].title}</p>`);
        $(".cart-price").append(`<p class="my-2">RM ${sum}</p>`);
        $(".cart-quantity").append(`<input type="number" class="form-control quantity my-2" data-id="${i}" value="${quantity}" min="1">`);
        $(".cart-subtotal").append(`<p class="subtotal my-2" data-id="${i}">RM ${sum}</p>`);

        // handle quantity increase event
        $(`.quantity[data-id="${i}"]`).on('change',()=>{

            //dynamically increase subtotal
            quantity = parseInt($(`.quantity[data-id="${i}"]`).val());
            const subTotal = quantity * sum;
            $(`.subtotal[data-id="${i}"]`).text(`RM ${subTotal}`);

            //update localStorage quantity
            const user = JSON.parse(localStorage.getItem(username)); // Retrieve the user object
            user.cart[i].quantity = quantity;
            localStorage.setItem(username,JSON.stringify(user));
        })
    };

    (currentUser.wishlist).forEach((wishListItem) =>{
        const title = wishListItem.title
        const deposit = parseInt(wishListItem.deposit.split(" ")[1]);
        const rental = parseInt(wishListItem.rental.split(" ")[1]);
        const sum = deposit + rental;

        $(".wishList-name").append(`<p class="my-2">${title}</p>`);
        $(".wishList-price").append(`<p class="my-2">RM ${sum}</p>`);
    });
})
