// index.js

// Cargar la API de Google y la API People
function loadGoogleAPI() {
    gapi.load('client:auth2', initClient);
}

// Inicializar el cliente de la API y la autenticación
function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyBNbdXP5c3RVltz2YLpQjPCVTbd3C-Urss',
        clientId: '164538105610-d0fclos8th1prrb4fem2vjllsj3cg49o.apps.googleusercontent.com',
        discoveryDocs: ["https://people.googleapis.com/$discovery/rest?version=v1"],
        scope: 'profile email https://www.googleapis.com/auth/contacts.readonly'
    }).then(function () {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Manejar el estado de la autenticación inicial
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

// Manejar el estado de la autenticación
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        makeApiCall();
    } else {
        console.log('User not signed in');
    }
}

// Llamada a la API People para obtener datos del perfil
function makeApiCall() {
    gapi.client.people.people.get({
        resourceName: 'people/me',
        personFields: 'names,emailAddresses,photos'
    }).then(function(response) {
        var profile = response.result;
        
        // Actualizar la interfaz de usuario con los datos del perfil
        document.getElementById('name').textContent = profile.names[0].displayName;
        document.getElementById('email').textContent = profile.emailAddresses[0].value;
        document.getElementById('image').src = profile.photos[0].url;

        // Obtener el token ID
        var id_token = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;

        // Redirigir a correo.html con el token ID como parámetro
        window.location.href = 'correo.html?id_token=' + encodeURIComponent(id_token);
    }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
    });
}

// Llamar a la función para cargar la API de Google
window.onload = function() {
    loadGoogleAPI();
};
