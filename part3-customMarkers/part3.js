const map = L.map('map').setView([41.64347137686369, -93.7652767543121], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

var sourceIcon = L.icon({
    iconUrl: '../source.png',
    iconSize: [20, 20],
    iconAnchor: [5, 5],
    popupAnchor: [0, 0]
});

var vaultMarker = L.marker([41.64347137686369, -93.7652767543121], { icon: sourceIcon }).addTo(map);

var vaultPopupMessage = "<b>Hello from the vault!</b>";

vaultMarker.bindPopup(vaultPopupMessage);

var hallMarker = L.marker([41.64347, -93.764327], { icon: sourceIcon }).addTo(map);