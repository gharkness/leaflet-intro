var map = L.map('map').setView([51.4817, -0.1910], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

var stamfordBridge = {
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

var selhurstPark = {
    "type": "Feature",
    "properties": {
        "name": "Selhurst Park",
        "amenity": "Football Stadium",
        "popupContent": "This is where Crystal Palace FC plays!"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-0.086084 - 0.001, 51.398338 - 0.001],
            [-0.086084 + 0.001, 51.398338 - 0.001],
            [-0.086084 + 0.001, 51.398338 + 0.001],
            [-0.086084 - 0.001, 51.398338 + 0.001],
            [-0.086084 - 0.001, 51.398338 - 0.001]
        ]]
    }
};

L.geoJSON([stamfordBridge, selhurstPark], {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.popupContent);
    }
}).addTo(map);