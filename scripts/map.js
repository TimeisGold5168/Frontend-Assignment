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