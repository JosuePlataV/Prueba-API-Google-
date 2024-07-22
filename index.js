function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    // Actualizar los elementos en el HTML con los datos del perfil
    document.getElementById('id').textContent = profile.getId();
    document.getElementById('name').textContent = profile.getName();
    document.getElementById('givenName').textContent = profile.getGivenName();
    document.getElementById('familyName').textContent = profile.getFamilyName();
    document.getElementById('image').src = profile.getImageUrl();
    document.getElementById('email').textContent = profile.getEmail();

    // Mostrar los datos del perfil y ocultar el botón de inicio de sesión
    document.querySelector('.data').style.display = 'block';
    document.querySelector('.g-signin2').style.display = 'none';
}
