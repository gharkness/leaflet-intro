const map = L.map('map').setView([41.64347137686369, -93.7652767543121], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

var polygon = L.polygon([
    [41.643538066792615, -93.76473248004915],
    [41.64354608438015, -93.76390635967256],
    [41.64332960916634, -93.76390099525453],
    [41.64329753870244, -93.76473784446716]
]);

var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
function setRandomColor() {
    polygon.setStyle({
        fillColor: getRandomColor(),
        fillOpacity: 0.5,
        color: '#000',
        weight: 2
    });
}

// setInterval(setRandomColor, 50);

polygon.on('click', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent("You have entered the vault")   // it's actually the hall
        .openOn(map);
});

polygon.addTo(map);

