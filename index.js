function handleCredentialResponse(response) {
    const responsePayload = decodeJwtResponse(response.credential);

    // Guardar los datos en localStorage
    localStorage.setItem('image', responsePayload.picture);
    localStorage.setItem('name', responsePayload.name);
    localStorage.setItem('email', responsePayload.email);

    // Redirigir a correo.html
    window.location.href = "correo.html";
}

function decodeJwtResponse(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
