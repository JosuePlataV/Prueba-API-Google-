function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementById$('name').textContent = profile.getName();
    document.getElementById$('email').textContent = profile.getEmail();
    document.getElementById$('image').src = profile.getImageUrl();
}
 
