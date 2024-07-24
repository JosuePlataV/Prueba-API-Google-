$(document).ready(function() {
    const image = localStorage.getItem('image');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    if (image && name && email) {
        $("#image").attr("src", image);
        $("#name").text(name);
        $("#email").text(email);
    } else {
        window.location.href = "index.html";
    }

    $("#signOut").click(function() {
        localStorage.removeItem('image');
        localStorage.removeItem('name');
        localStorage.removeItem('email');

        window.location.href = "index.html";
    });
});
