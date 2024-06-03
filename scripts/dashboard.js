document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form values
    var latitude = document.getElementById('latitude').value;
    var longitude = document.getElementById('longitude').value;
    var info = document.getElementById('info').value;

    // Create a new location object
    var newLocation = {
        coordinates: [parseFloat(latitude), parseFloat(longitude)],
        description: `
            <div class="popup-content">
                <h3>New Location</h3>
                <p>${info}</p>
            </div>
        `
    };

    // Add the new location to the map
    var popup = L.popup({
        maxWidth: 300
    }).setContent(newLocation.description);
    L.marker(newLocation.coordinates, { icon: customIcon }).addTo(map).bindPopup(popup);

    // Reset form fields
    document.getElementById('latitude').value = '';
    document.getElementById('longitude').value = '';
    document.getElementById('info').value = '';
});
