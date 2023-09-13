$(function() {
    const container = $('.weather-container');
    const search = $('.search-box button');
    const error404 = $('.not-found');
    const weatherBox = $('.weather-box');
    const weatherDetails = $('.weather-details');
    const bookType = $('.book-type');

    search.click(function() {
        const APIKey = '3211ab9f4e0198ada0c84c45ee8205e0';
        const city = $('.search-box input').val();
      
        if (city === '') {
            return;
        }

        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`,
            type: 'GET',
            dataType: 'json',
            success: function(json) {
                if (json.cod === '404') {
                    container.css('height', '400px');
                    weatherBox.hide();
                    weatherDetails.hide();
                    error404.show();
                    error404.addClass('fadeIn');
                    return;
                }

                error404.hide();
                error404.removeClass('fadeIn');

                const image = $('.weather-box img');
                const temperature = $('.weather-box .temperature');
                const description = $('.weather-box .description');
                const humidity = $('.weather-details .humidity span');
                const wind = $('.weather-details .wind span');

                switch (json.weather[0].main) {
                    case 'Clear':
                        image.attr('src', '../images/weatherIcon/clear.png');
                        bookType.text('Recommended Book Type: Fiction');
                        displayGenre("fiction");
                        break;
                    case 'Rain':
                        image.attr('src', '../images/weatherIcon/rain.png');
                        bookType.text('Recommended Book Type: Love');
                        displayGenre("love");
                        break;
                    case 'Snow':
                        image.attr('src', '../images/weatherIcon/Snow.png');
                        bookType.text('Recommended Book Type: Fantasy');
                        displayGenre("fantasy");
                        break;
                    case 'Clouds':
                        image.attr('src', '../images/weatherIcon/cloud.png');
                        bookType.text('Recommended Book Type: Adventure');
                        displayGenre("adventure");
                        break;
                    case 'Haze':
                        image.attr('src', '../images/weatherIcon/mist.png');
                        bookType.text('Recommended Book Type: Horror');
                        displayGenre("horror");
                        break;
                    default:
                        image.attr('src', '');
                        bookType.text('Recommended Book Type: Humor');
                }

                temperature.html(`${parseInt(json.main.temp)}<span>°C</span>`);
                description.html(`${json.weather[0].description}`);
                humidity.html(`${json.main.humidity}%`);
                wind.html(`${parseInt(json.wind.speed)}Km/h`);

                weatherBox.show();
                weatherDetails.show();
                weatherBox.addClass('fadeIn');
                weatherDetails.addClass('fadeIn');
                container.css('height', '590px');     
            }
            

        });
        

    });
    const displayGenre = genre=> {
        $.get(`https://openlibrary.org/subjects/${genre}.json`,data=>{
            const randomId = Math.floor(Math.random() * 10);
            const randomBook = data.works[randomId];
            const bookInfo = {
                title:randomBook.title,
                author:randomBook.authors ? randomBook.authors[0].name : 'Unknown Author',
                id: Math.floor(Math.random()*10000)+1,
                rental: Math.floor(Math.random()*30)+1,
                deposit: Math.floor(Math.random()*50)+10,
                genre:genre,
                image:`https://covers.openlibrary.org/b/id/${randomBook.cover_id}-L.jpg`,
                summary:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero in sit ut. Dolorem doloremque aperiam nostrum alias voluptatibus culpa maiores nulla omnis, mollitia corporis laboriosam asperiores beatae maxime commodi? Minus."
            } 
            displayBook(bookInfo);
        });
    };
    const displayBook = bookInfo =>{
        $(".title").text("Book Title: " + bookInfo.title);
        $(".author").text("Book Author: " + bookInfo.author);
        $(".book-cover").html(`<img width=200px height=300px src="${bookInfo.image}" alt="No Book Cover">`);
        $(".btn-container").html(`
            <img height=64px src="../images/icon/cart_black.png" alt="card" class="pr-4 btn cart-btn">
            <img height=64px src="../images/icon/love_black.png" alt="love" class="btn love-btn">
        `)
    }
});
