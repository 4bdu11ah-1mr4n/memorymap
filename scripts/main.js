// Initialize the map
console.log("Initializing Leaflet map...");

var map = L.map('map').setView([33.7135478,73.0245259], 17); // Set initial center coordinates and zoom level

console.log("Map initialized:", map);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

console.log("Tile layer added to map.");
// Create a custom icon
var customIcon = L.icon({
    iconUrl: 'scripts/images/marker-icon.png', // Path to your custom marker image
    iconRetinaUrl: 'scripts/images/marker-icon-2x.png', // Path to your retina marker image
    shadowUrl: 'scripts/images/marker-shadow.png', // Path to the shadow image
    iconSize: [70, 75], // Size of the icon (width, height)
    iconAnchor: [40, 40], // Point of the icon which will correspond to marker's location (half width, height)
    popupAnchor: [0, -60], // Point from which the popup should open relative to the iconAnchor (0, -height)
    shadowSize: [80, 80] // Size of the shadow (optional, based on your shadow image)
});


/// Add markers for key locations using the custom icon
var locations = [
    {
        coordinates: [33.7135478,73.0245259],
        description: `
            <div class="popup-content">
                <h3>Pak Studies Paper</h3>
                <img src="media/images/pin1.jpg" alt="Start 1" class="popup-image">
                <p>sme random text will add functionality to add text and images using buttons and textbx instead of hardcoding</p>
            </div>
        `
    },
    {
        coordinates: [33.7155479,73.0246263],
        description: `
            <div class="popup-content">
                <h3>Location 2</h3>
                <img src="media/images/location2.jpg" alt="Location 2" class="popup-image">
                <p>Location 2: Description</p>
            </div>
        `
    }
];

locations.forEach(function(location) {
    var popup = L.popup({
        maxWidth: 300 // Set a maximum width for the popup
    }).setContent(location.description);
    L.marker(location.coordinates, { icon: customIcon }).addTo(map).bindPopup(popup);
});