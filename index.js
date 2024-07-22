function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#image").attr(`src`,profile.getImageUrl());
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
}
 
