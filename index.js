function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#image").attr('src', profile.getImageUrl());
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
}
 
function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
        alert("Has cerrado sesión correctamente");
        $(".g-signin2").css("display", "block");
        $(".data").css("display", "none");
    })
}