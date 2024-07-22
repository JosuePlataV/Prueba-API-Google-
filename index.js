// index.js

// Función que se llama cuando el usuario se autentica con Google
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    // Muestra los datos del perfil en la interfaz de usuario
    document.getElementById('name').textContent = profile.getName();
    document.getElementById('email').textContent = profile.getEmail();
    document.getElementById('image').src = profile.getImageUrl();

    // Obtén el token ID
    var id_token = googleUser.getAuthResponse().id_token;

    // Redirige al usuario a correo.html con el token ID como parámetro
    window.location.href = 'correo.html?id_token=' + encodeURIComponent(id_token);
}

// Asegúrate de que la API de Google esté cargada antes de que se ejecute el código
window.onload = function() {
    gapi.load('auth2', function() {
        gapi.auth2.init().then(function() {
            // La API está cargada y lista
        });
    });
};
