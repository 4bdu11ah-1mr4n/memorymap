document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form values
    var latitude = document.getElementById('latitude').value;
    var longitude = document.getElementById('longitude').value;
    var info = document.getElementById('info').value;
    var image = document.getElementById('image').files[0];

    // Upload image and get its URL
    uploadImage(image).then(function(imageUrl) {
        // Create a new location object
        var newLocation = {
            coordinates: [parseFloat(latitude), parseFloat(longitude)],
            description: `
                <div class="popup-content">
                    <h3>New Location</h3>
                    <img src="${imageUrl}" alt="New Location Image" class="popup-image">
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
        document.getElementById('image').value = '';
    }).catch(function(error) {
        console.error('Error uploading image:', error);
    });
});

// Function to upload image
function uploadImage(image) {
    return new Promise(function(resolve, reject) {
        // Implement image upload logic here (e.g., using FormData and XMLHttpRequest)
        // Upon successful upload, resolve with the image URL; otherwise, reject with an error
    });
}
