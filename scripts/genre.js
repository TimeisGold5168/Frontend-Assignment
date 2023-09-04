let html;

$(function(){
    products.forEach(product =>{
        html = `<div class="bookCard">
                    <img class="bookCover" src=${product.image}>
                    <div class="details">
                        <h3 class="bookTitle">${product.title}</h3>
                        <p class="author">Author: ${product.author}</p>
                        <p class="rental">Rental:RM ${product.rental}</p>
                        <p class="deposit">Deposit:RM ${product.deposit}</p>
                        <div class="summary">
                            <p>${product.summary}</p>
                        </div>
                        <div class="btnContainer">
                            <img src="../images/icon/cart_icon.png" alt="card" class="btn cart-btn">
                            <img src="../images/icon/love_icon.png" alt="love" class="btn love-btn">
                        </div>
                    </div>
                </div>
            `
        $(".container").append(html);
    });
})