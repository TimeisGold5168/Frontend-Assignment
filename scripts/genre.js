

$(function(){
    //display book function
    const displayBook = book=>{
        let html = `<div class="bookCard">
                    <img class="bookCover" src=${book.image}>
                    <div class="details">
                        <h3 class="bookTitle">${book.title}</h3>
                        <p class="author">Author: ${book.author}</p>
                        <p class="rental">Rental:RM ${book.rental}</p>
                        <p class="deposit">Deposit:RM ${book.deposit}</p>
                        <div class="summary">
                            <p>${book.summary}</p>
                        </div>
                        <div class="btnContainer">
                            <img src="../images/icon/cart_icon.png" alt="card" class="btn cart-btn">
                            <img src="../images/icon/love_icon.png" alt="love" class="btn love-btn">
                        </div>
                    </div>
                </div>
            `
        $(".bookContainer").append(html);
    };


    products.forEach(product =>{
        displayBook(product);
    });

    //handle filter
    $(".genreFilter").change(()=>{
        //clear bookContainer before render new books
        $(".bookContainer").html("");

        const selectedGenre = $(this).find(":selected").val();
        
        if(selectedGenre == "all") {
            products.forEach(product =>{
                displayBook(product);
            });
        }

        products.forEach(product =>{
            if(product.genre == selectedGenre){
                displayBook(product);
            }
        })
    });
})