$(function() {
    const container = $('.weather-container');
    const search = $('.search-box button');
    const error404 = $('.not-found');
    const weatherBox = $('.weather-box');
    const weatherDetails = $('.weather-details');
    const bookDesc = $('.book-desc');

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
              // Suggested book for Clear weather: Fiction
              bookDesc.text('Recommended Book Type: Fiction');
              break;
            case 'Rain':
              image.attr('src', '../images/weatherIcon/rain.png');
              // Suggested book for Rain weather: Love
              bookDesc.text('Recommended Book Type: Love');
              break;
            case 'Snow':
              image.attr('src', '../images/weatherIcon/Snow.png');
              // Suggested book for Snow weather: Fantasy
              bookDesc.text('Recommended Book Type: Fantasy');
              break;
            case 'Clouds':
              image.attr('src', '../images/weatherIcon/cloud.png');
              // Suggested book for Cloudy weather: Adventure
              bookDesc.text('Recommended Book Type: Adventure');
              break;
            case 'Haze':
              image.attr('src', '../images/weatherIcon/mist.png');
              // Suggested book for Haze weather: Horror
              bookDesc.text('Recommended Book Type: Horror');
              break;
            default:
              image.attr('src', '');
              // Default book recommendation
              bookDesc.text('Recommended Book Type: Humor');
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
          
        },
      });
    });

  });