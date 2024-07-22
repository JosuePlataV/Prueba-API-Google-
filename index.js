let Container = document.querySelector("#Container"),
url = "https://people.googleapis.com/$discovery/rest?version=v1",
email = "https://www.googleapis.com/auth/userinfo.email",
profile = "https://www.googleapis.com/auth/userinfo.profile",
clientid = "164538105610-d0fclos8th1prrb4fem2vjllsj3cg49o.apps.googleusercontent.com",
login = document.querySelector("#login");

var googleUser = {};
        var startApp = function() {
            gapi.load('auth2', function(){
                auth2 = gapi.auth2.init({
                    clientid: 'clientid',
                    cookiepolicy: 'single_host_origin',
                    scope: 'https://www.googleapis.com/auth/gmail.readonly'
                });
                attachSignin(document.getElementById('login'));
            });
        };

        function attachSignin(element) {
            auth2.attachClickHandler(element, {},
                function(googleUser) {
                    var profile = googleUser.getBasicProfile();
                    var id_token = googleUser.getAuthResponse().id_token;
                    // Redirigir a la segunda pantalla con el token de ID
                    window.location.href = "/profile.html?id_token=" + id_token;
                }, function(error) {
                    console.log(JSON.stringify(error, undefined, 2));
                });
        }

        startApp();
