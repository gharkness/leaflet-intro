var map = L.map('map').setView([52.3555, -1.1743], 6);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

var markers = L.markerClusterGroup();

var stadiums = [
    {name: "Anfield (Liverpool)", lat: 53.43083, lng: -2.96083},
    {name: "Emirates Stadium (Arsenal)", lat: 51.55778, lng: 0.10278},
    {name: "Old Trafford (Manchester United)", lat: 53.4631, lng: -2.29139},
    {name: "Etihad Stadium (Manchester City)", lat: 53.4831, lng: -2.2004},
    {name: "Stamford Bridge (Chelsea)", lat: 51.4817, lng: -0.1910},
    {name: "Tottenham Hotspur Stadium (Tottenham Hotspur)", lat: 51.6043, lng: -0.0664},
    {name: "Villa Park (Aston Villa)", lat: 52.5091, lng: -1.8848},
    {name: "Goodison Park (Everton)", lat: 53.4388, lng: -2.9663},
    {name: "King Power Stadium (Leicester City)", lat: 52.6203, lng: -1.1422},
    {name: "St. James' Park (Newcastle United)", lat: 54.9756, lng: -1.6217},
    {name: "Stadium of Light (Sunderland)", lat: 54.9147, lng: -1.3883},
    {name: "Elland Road (Leeds United)", lat: 53.7775, lng: -1.57212},
    {name: "Hillsborough (Sheffield Wednesday)", lat: 53.411, lng: -1.5005},
    {name: "St. Mary's Stadium (Southampton)", lat: 50.90583, lng: -1.39111},
    {name: "Portman Road (Ipswich Town)", lat: 52.05500, lng: 1.14472},
    {name: "The Hawthorns (West Bromwich Albion)", lat: 52.50917, lng: -1.96389},
    {name: "Vitality Stadium (Bournemouth)", lat: 50.7345, lng: -1.8363},
    {name: "Brentford Community Stadium (Brentford)", lat: 51.490715, lng: -0.289048},
    {name: "City Ground (Nottingham Forest)", lat: 52.94000, lng: -1.13278},
    {name: "Turf Moor (Burnley)", lat: 53.7868, lng: -2.2248},
    {name: "Wembley Stadium", lat: 51.5560, lng: -0.2795},
    {name: "London Stadium (West Ham United)", lat: 51.5387, lng: -0.0166},
    {name: "Selhurst Park (Crystal Palace)", lat: 51.3983, lng: -0.0855},
    {name: "Craven Cottage (Fulham)", lat: 51.4748, lng: -0.2216},
    {name: "The Valley (Charlton Athletic)", lat: 51.4865, lng: 0.0366},
    {name: "The Den (Millwall)", lat: 51.4859, lng: -0.0509},
    {name: "Vicarage Road (Watford)", lat: 51.6498, lng: -0.4014},
    {name: "Brentford Community Stadium", lat: 51.4908, lng: -0.2887},
    {name: "Kiyan Prince Foundation Stadium (Queens Park Rangers)", lat: 51.5093, lng: -0.2322}
];

for (var i = 0; i < stadiums.length; i++) {
    var marker = L.marker([stadiums[i].lat, stadiums[i].lng])
        .bindPopup(stadiums[i].name);
    markers.addLayer(marker);
}

map.addLayer(markers);