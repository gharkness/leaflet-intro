const map = L.map('map').setView([41.64347137686369, -93.7652767543121], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

var tooltip;

map.on('mousemove', function(e) {
    // Remove the old tooltip if it exists
    if (tooltip) {
        map.closeTooltip(tooltip);
    }

    tooltip = L.tooltip()
        .setContent(e.latlng.toString())
        .setLatLng(e.latlng)
        .addTo(map);
});

map.on('mouseout', function() {
    if (tooltip) {
        map.closeTooltip(tooltip);
    }
});