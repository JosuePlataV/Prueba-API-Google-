function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var id_token = getParameterByName('id_token');

function displayProfile(profile) {
    document.getElementById('profile-pic').src = profile.photos[0].url || 'default-profile-pic.jpg'; // URL de imagen por defecto si no hay foto
    document.getElementById('profile-name').innerText = profile.names[0].displayName || 'Nombre no disponible';
    document.getElementById('profile-email').innerText = profile.emailAddresses[0].value || 'Correo no disponible';
}

function fetchProfile() {
    gapi.load('client', function() {
        gapi.client.init({
            apiKey: 'AIzaSyBNbdXP5c3RVltz2YLpQjPCVTbd3C-Urss', // Reemplaza con tu API Key si es necesario
            discoveryDocs: ["https://people.googleapis.com/$discovery/rest?version=v1"],
        }).then(function() {
            return gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;
        }).then(function() {
            return gapi.client.request({
                path: 'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos',
                headers: {
                    'Authorization': 'Bearer ' + id_token
                }
            });
        }).then(function(response) {
            displayProfile(response.result);
        }, function(reason) {
            console.log('Error: ' + reason.result.error.message);
        });
    });
}

fetchProfile();
