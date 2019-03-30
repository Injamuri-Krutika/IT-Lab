'use strict';

function loginClicked() {
    var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;
    if (uname === "Kru" && pass === "pass") {
        var loc = window.location.href
        var regloc = loc.substring(0, loc.lastIndexOf("/") + 1) + "home.html"
        location.href = regloc;
    }
}
function registerClicked() {
    var loc = window.location.href
    var regloc = loc.substring(0, loc.lastIndexOf("/") + 1) + "index.html#register"
    location.href = regloc;
}