$(function () {
    const query = (JSON.parse(localStorage.getItem('recentSearches')))[0];

    const displayBook = book => {
        let html = `<div class="bookCard">
                        <img class="bookCover" src=${book.image}>
                        <div class="details">
                            <h3 class="bookTitle">${book.title}</h3>
                            <p class="author">Author: ${book.author}</p>
                            <p class="rental">Rental: RM${book.rental}</p>
                            <p class="deposit">Deposit: RM${book.deposit}</p>
                            <div class="summary">
                                <p>${book.summary}</p>
                            </div>
                            <div class="btnContainer">
                                <button class='cart-btn px-4 py-1 me-3'><i class="fa-solid fa-cart-shopping me-2" style="color: #15133c;"></i>Add to cart</button>
                                <button class='love-btn px-4 py-1'><i class="fa-solid fa-heart me-2" style="color: #15133c;"></i>Add to wishlist</button>
                            </div>
                        </div>
                    </div>`;

        $("#searchResults").append(html);
    };

    var foundBook = products.find(book => book.title.toLowerCase() === query.trim().toLowerCase());

    if (foundBook) {
        displayBook(foundBook);
        var rentalFormat = "Rental:RM ";
        var depositFormat = "Deposit:RM "

        // Event listener for the love button
        $(".love-btn").click(function () {
            const book = {
                title: foundBook.title,
                rental: rentalFormat + foundBook.rental.toString(),
                deposit: depositFormat + foundBook.deposit.toString()
            };

            const bookExists = currentUser.wishlist.some((lovedBook) => lovedBook.title === book.title);

            if (bookExists) {
                alert("This book is already in your wishlist!");
            } else {
                alert(`${book.title} successfully added to your wishlist!`);
                currentUser.wishlist.push(book);
                localStorage.setItem(currentUser.username, JSON.stringify(currentUser));
            }
        });

        // Event listener for the cart button
        $(".cart-btn").click(function () {
            
            const book = {
                title: foundBook.title,
                rental: rentalFormat + foundBook.rental.toString(),
                deposit: depositFormat + foundBook.deposit.toString(),
                quantity: 1
            };

            const bookExists = currentUser.cart.some((lovedBook) => lovedBook.title === book.title);

            if (bookExists) {
                alert("This book is already in your cart!");
            } else {
                alert(`${book.title} successfully added to your cart!`);
                currentUser.cart.push(book);
                localStorage.setItem(currentUser.username, JSON.stringify(currentUser));
            }
        });

    } else {
        let html = '<p class=\'m-0\'>Sorry, We currently do not have the book you are looking for. Browse our catalog to discover more books.</p>'
        $('#searchResults').append(html);
    }
});