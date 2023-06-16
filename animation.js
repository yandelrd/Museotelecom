document.addEventListener('DOMContentLoaded', function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
  } else {
    alert('Geolocalización no es compatible en este navegador.');
  }
});

function showLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const mapElement = document.getElementById('map');
  mapElement.innerHTML = `Latitud: ${latitude}, Longitud: ${longitude}`;
}