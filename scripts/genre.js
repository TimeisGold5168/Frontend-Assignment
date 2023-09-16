
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
                            <img src="../images/icon/cart_icon.png" class="addbtn cart-btn">
                            <img src="../images/icon/love_icon.png" class="addbtn love-btn">
                        </div>
                    </div>
                </div>
            `
        $(".bookContainer").append(html);
    };

    const displayGenre = genre=> {
        if(genre == "all") {
            products.forEach(product =>{
                displayBook(product);
            });
        } else if (genre == "adventure" || genre== "fiction") {
            products.forEach(product =>{
                if(product.genre == genre){
                    displayBook(product);
                }
            })
        } else {
            $.get(`https://openlibrary.org/subjects/${genre}.json`,data=>{
                data.works.forEach(book => {
                    const bookInfo = {
                        title:book.title,
                        author:book.authors ? book.authors[0].name : 'Unknown Author',
                        id: Math.floor(Math.random()*10000)+1,
                        rental: Math.floor(Math.random()*30)+1,
                        deposit: Math.floor(Math.random()*50)+10,
                        genre:genre,
                        image:`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`,
                        summary:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero in sit ut. Dolorem doloremque aperiam nostrum alias voluptatibus culpa maiores nulla omnis, mollitia corporis laboriosam asperiores beatae maxime commodi? Minus."
                    }
                    displayBook(bookInfo);
                });
            })
        }
    };

    products.forEach(product =>{
        displayBook(product);
    });

    //handle filter
    $(".genreFilter").change(()=>{
        //clear bookContainer before render new books
        $(".bookContainer").html("");

        const selectedGenre = $(this).find(":selected").val();
        displayGenre(selectedGenre);
       
    });

    // Event listener for the love button
    $(".bookContainer").on("click", ".love-btn", function () {
        const bookCard = $(this).closest(".bookCard"); // Find the parent book card
        const book = {
            title: bookCard.find(".bookTitle").text(),
            rental: bookCard.find(".rental").text(),
            deposit: bookCard.find(".deposit").text()
        };

        const bookExists = currentUser.wishlist.some((lovedBook) => lovedBook.title === book.title);

        if(bookExists) {
            alert("This book is already in your wishlist!");
        } else {
            alert(`${book.title} successfully added to your wishlist!`);
            currentUser.wishlist.push(book);
            localStorage.setItem(currentUser.username, JSON.stringify(currentUser));
        }
    });

     // Event listener for the cart button
     $(".bookContainer").on("click", ".cart-btn", function () {
        const bookCard = $(this).closest(".bookCard"); // Find the parent book card
        const book = {
            title: bookCard.find(".bookTitle").text(),
            rental: bookCard.find(".rental").text(),
            deposit: bookCard.find(".deposit").text(),
            quantity:1
        };

        const bookExists = currentUser.cart.some((lovedBook) => lovedBook.title === book.title);

        if(bookExists) {
            alert("This book is already in your cart!");
        } else {
            alert(`${book.title} successfully added to your cart!`);
            currentUser.cart.push(book);
            localStorage.setItem(currentUser.username, JSON.stringify(currentUser));
        }
    });
})