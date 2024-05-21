var map = L.map('map').setView([51.4817, -0.1910], 13);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Define a GeoJSON object
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Stamford Bridge",
        "amenity": "Football Stadium",
        "popupContent": "This is where Chelsea FC plays!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-0.1910, 51.4817]
    }
};

// Add the GeoJSON layer to the map
L.geoJSON(geojsonFeature).addTo(map);