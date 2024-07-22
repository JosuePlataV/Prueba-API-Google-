function handleCredentialResponse(response) {
    const responsePayload = decodeJwtResponse(response.credential);
    $("#image").attr("src", responsePayload.picture);
    $("#name").text(responsePayload.name);
    $("#email").text(responsePayload.email);
    $(".data").show();
    $(".g_id_signin").hide();
}

function decodeJwtResponse(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

$(document).ready(function() {
    $("#signOut").click(function() {
        $("#image").attr("src", "");
        $("#name").text("");
        $("#email").text("");
        $(".data").hide();
        $(".g_id_signin").show();
        window.location.href = "index.html";
    });
});

