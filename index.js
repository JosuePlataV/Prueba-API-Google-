function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    function onSignIn(googleUser) {
        document.getElementById('name').textContent = profile.getName();
        document.getElementById('email').textContent = profile.getEmail();
        document.getElementById('image').src = profile.getImageUrl();
        $(".data").css("display", "block");
        $(".g-signin2").css("display", "none");
    }
}
 
