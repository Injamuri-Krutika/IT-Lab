'use strict';
function stateChange() {
	  if (asyncRequest.readyState == 4 && asyncRequest.status == 200) {
	    var text = document.getElementById('response'); //  text is an id of a
	    var resp = asyncRequest.responseText;
	    
	    if(resp == "Success"){
	    	redirect('userhome');
	    }	    	
	    else
	    	text.innerHTML = asyncRequest.responseText; //  div in HTML document
	  }
	}




function loginClicked() {
	
	try {
		asyncRequest = new XMLHttpRequest();
        asyncRequest.addEventListener('readystatechange', stateChange, false);
        asyncRequest.open('POST', 'servlet/Login', true); //   /Test is url to Servlet!
        asyncRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        asyncRequest.send(`uname=${encodeURI(document.getElementById('uname').value)}&pass=${encodeURI(document.getElementById('pass').value)}`);
      } catch (exception) {
        alert('Request failed');
        console.log(exception);
      }
	
	
    /*var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;
    if (uname === "Kru" && pass === "pass") {
        var loc = window.location.href
        var regloc = loc.substring(0, loc.lastIndexOf("/") + 1) + "home.html"
        location.href = regloc;
    }*/
}

function redirect(endpoit) {
    var loc = window.location.href
    var regloc = loc.substring(0, loc.lastIndexOf("/") + 1) + "index.html#"+endpoit
    location.href = regloc;
}