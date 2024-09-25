let map;

export default async function initMap() {
  const { Map } = await google.maps.importLibrary('maps');

  map = new Map(document.getElementById('map'), {
    center: { lat: 52.4064, lng: 16.9252 },
    zoom: 12,
  });
}