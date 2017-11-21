const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

<<<<<<< HEAD
mapboxgl.accessToken = "YOUR API TOKEN HERE";
=======
mapboxgl.accessToken = 'pk.eyJ1IjoiZW1nb3Jkb24xNTQiLCJhIjoiY2phOXVmNGk5MGt0eDMycXVweWEybmVrciJ9.Q310T3dOqbZ8ctXakShBWQ';
>>>>>>> 8fc4f31781500051eeb4843872134bd92b7f6c0d

const fullstackCoords = [-74.009, 40.705] // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);
