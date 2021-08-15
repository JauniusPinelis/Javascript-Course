var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;

  L.mapbox.accessToken =
  "<apiKey>";
  var map = L.mapbox
  .map("map")
  .setView([position.coords.latitude, position.coords.longitude], 15)
  .addLayer(L.mapbox.styleLayer("mapbox://styles/mapbox/streets-v11"));
}

getLocation();

