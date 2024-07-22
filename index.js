function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementById('image').src = profile.getImageUrl();
    document.getElementById('name').textContent = profile.getName();
    document.getElementById('email').textContent = profile.getEmail();
    document.querySelector('.data').style.display = 'block';
    document.querySelector('.g-signin2').style.display = 'none';
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        alert("Has cerrado sesión correctamente");
        document.querySelector('.data').style.display = 'none';
        document.querySelector('.g-signin2').style.display = 'block';
    });
}

