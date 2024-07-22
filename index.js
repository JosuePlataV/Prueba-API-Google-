function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr(`src`,profile.getImageUrl());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
    var id_token = googleUser.getAuthResponse().id_token;
    window.location.href = 'correo.html?id_token=' + id_token;
}

