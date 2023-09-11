

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
                            <img src="../images/icon/cart_icon.png" class="btn cart-btn" data-id="${book.id}" >
                            <img src="../images/icon/love_icon.png" class="btn love-btn" data-id="${book.id}" >
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

    // Event listener for the love button
    $(".bookContainer").on("click", ".love-btn", function () {
        const bookId = $(this).data("id");
        const bookExists = currentUser.wishlist.some((id) => id === bookId);

        if(bookExists) {
            alert("This book is already in your wishlist!");
        } else {
            alert(`Successfully added to your wishlist!`);
            currentUser.wishlist.push(bookId);
            localStorage.setItem(currentUser.username, JSON.stringify(currentUser));
        }
    });
    
    // Event listener for the cart button
    $(".bookContainer").on("click", ".cart-btn",function () {
        const bookId = $(this).data("id");
        const bookExists = currentUser.cart.some((id) => id === bookId);

        if(bookExists) {
            alert("This book is already in your cart!");
        } else {
            alert(`Successfully added to your cart!`);
            currentUser.cart.push(bookId);
            localStorage.setItem(currentUser.username, JSON.stringify(currentUser));
        }
    });
  
})