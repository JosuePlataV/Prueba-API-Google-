import { GoogleLogin } from 'react-google-login';
let Container = document.querySelector(".g-signin2"),
clientid = "164538105610-d0fclos8th1prrb4fem2vjllsj3cg49o.apps.googleusercontent.com",
secret = "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"

function init() {
    gapi.load('auth2', function() {
        client_id: clientid
    });
  }

