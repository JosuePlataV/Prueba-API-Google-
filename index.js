// Configura la función de callback que se llama cuando el usuario inicia sesión
function handleCredentialResponse(response) {
    const responsePayload = decodeJwtResponse(response.credential);

    // Usar jQuery para manipular el DOM
    $("#image").attr("src", responsePayload.picture);
    $("#name").text(responsePayload.name);
    $("#email").text(responsePayload.email);
    $(".data").show(); // Mostrar los datos del usuario
    $(".g_id_signin").hide(); // Ocultar el botón de inicio de sesión
}

// Decodificar el token JWT para obtener la información del usuario
function decodeJwtResponse(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

