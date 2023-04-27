
const coordenadasPenco = [-36.73838, -72.996375];

const map = L.map('map').setView(coordenadasPenco, 15);

/* LEAFLET PLUGINS */
//localización
const options = { flyTo: true, showPopup: false };
L.control.locate(options).addTo(map);

const googleHybrid = L.tileLayer(`http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}`, {
    subdomains:['mt0','mt1','mt2','mt3'],
    maxZoom: 20,
    attribution: '© Google'
}).addTo(map);


// const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

const marker = L.marker(coordenadasPenco).addTo(map)
    .bindPopup('<b>Nuestra ubicación!</b><br />Chacabuco 140.').openPopup();

// const circle = L.circle(coordenadasPenco, {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map).bindPopup('I am a circle.');

// const polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map).bindPopup('I am a polygon.');


// const popup = L.popup()
//     .setLatLng([51.513, -0.09])
//     .setContent('I am a standalone popup.')
//     .openOn(map);

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent(`You clicked the map at ${e.latlng.toString()}`)
//         .openOn(map);
// }

// map.on('click', onMapClick);