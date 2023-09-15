let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 4.3348 , lng:  101.1351 },
    zoom: 15,
  });
  const marker = new google.maps.Marker({
    position: {lat: 4.3348 , lng:  101.1351},
    map: map,
    draggable: false,
  });

  const infoWindow = new google.maps.InfoWindow({
    content:"<p style='font-family: poppin; font-size:1.5vw;'>This is our main branch location</p>"
  });
  infoWindow.open(map,marker)
}

initMap();

$('.location-button').click(function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      var apiKey = "AIzaSyBi-h4GZDj6PFwsslaxjgoqvJqlHDNVzyA"; // Replace with your API key
      $.get(
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        position.coords.latitude +
        "," +
        position.coords.longitude +
        "&sensor=false&key=" +
        apiKey, // Include your API key here
        function (data) {
          console.log(data);
        }
      );
      var img = document.getElementById("map-image");
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var zoomLevel = 15; // Set the desired zoom level

      // Set the marker icon and label (you can customize these)
      var markerIcon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"; // URL to a marker icon
      var markerLabel = "Marker"; // Label for the marker

      img.src =
        "https://maps.googleapis.com/maps/api/staticmap?center=" +
        latitude +
        "," +
        longitude +
        "&zoom=" + zoomLevel + // Set the zoom level here
        "&size=800x400&markers=label:" +
        markerLabel +
        "%7Cicon:" +
        markerIcon +
        "%7C" +
        latitude +
        "," +
        longitude +
        "&sensor=false&key=" +
        apiKey; // Include your API key here
      // Make the container responsive
      var container = document.querySelector(".output");
      container.style.width = "100%";
      container.style.maxWidth = "auto"; // Adjust the maximum width as needed

      // Make the image responsive
      img.style.width = "100%";
      img.classList.remove("hidden");
    });
  }
});