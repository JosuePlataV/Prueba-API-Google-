function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    function onSignIn(googleUser) {
        document.getElementById$('name').textContent = profile.getName();
        document.getElementById$('email').textContent = profile.getEmail();
        document.getElementById$('image').src = profile.getImageUrl();
        document.getElementsByClassName$(".data").css("display", "block");
        document.getElementsByClassName$(".g-signin2").css("display", "none");
    }
}
 
