'use strict';
let asyncRequest;
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function readystatechange() {
	  if (asyncRequest.readyState == 4 && asyncRequest.status == 200) {
	    var text = document.getElementById('response'); //  text is an id of a
	    var resp = asyncRequest.responseText;
	    console.log(resp);
	    if(resp!="Success!!"){
	    	text.innerHTML = "There was some error while processing your request! Please try again later!";
	    }else{
	    	var loc = window.location.href
	        var regloc = loc.substring(0, loc.lastIndexOf("/") + 1) + "index.html#login"
	        location.href = regloc;
	    }
	  }
	}

function goHome() {
    /*var loc = window.location.href
    location.href = "#home";*/

    try {
        asyncRequest = new XMLHttpRequest();
        asyncRequest.addEventListener('readystatechange', readystatechange, false);
        asyncRequest.open('POST', 'servlet/Register', true); //   /Test is url to Servlet!
        // Construct
/*        let data = '';
        data += 'fn=' + document.getElementById('fn').value + '&';
        data += 'ln=' + document.getElementById('ln').value + '&';
        data += 'un=' + document.getElementById('un').value + '&';
        data += 'ps=' + document.getElementById('ps').value + '&';
        data += 'date=' + document.getElementById('date').value + '&';
        data += 'aa=' + document.getElementById('aa').value + '&';
        data += 're=' + document.getElementById('re').value + '&';
        data += 'mo=' + document.getElementById('mo').value;
        console.log(new FormData(document.getElementById('form')));*/
        /*var form = document.getElementById('registrationForm');
        console.log(form);
        form.submit();*/
        asyncRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        let data=`firstName=${(document.getElementById('firstName').value)}&date=${encodeURI(document.getElementById('date').value)}&gender=${encodeURI(document.querySelector('input[name="gender"]:checked').value)}&address=${encodeURI(document.getElementById('address').value)}&emailId=${encodeURI(document.getElementById('emailId').value)}&password=${encodeURI(document.getElementById('password').value)}&phoneNumber=${encodeURI(document.getElementById('phoneNumber').value)}&aadhar=${encodeURI(document.getElementById('aadhar').value)}`;
        console.log(data);
         asyncRequest.send(data);
      } catch (exception) {
        alert('Request failed');
        console.log(exception);
      }
    
    
}

var reg = {
    "firstName": /^[a-zA-Z ]+/,
    "password": /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
    "emailId": /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    "phoneNumber": /^[0-9]{10,10}/,
    "aadhar": /^[0-9]{12,12}/
}

function validateFormat(fieldName) {
    var regex = reg[fieldName];
    console.log(fieldName);
    var message1 = "Invalid Format!!";
    var message2 = "Field cannot be empty!!";
    var formElement = getFormElement(fieldName);
    var currRow = getCurrentRow(formElement);
    if (formElement.value === "") {
        updateTableRow(currRow + 1, message2)
    } else if (regex.test(formElement.value)) {
        updateTableRow(currRow + 1, "")
    } else {
        updateTableRow(currRow + 1, message1)
    }
}

function getCurrentRow(element) {
    return element.parentNode.parentNode.rowIndex
}

function getFormElement(fieldName) {
    var form = document.forms[0];

    if (fieldName == "firstName") {
        return form.firstName
    }
    if (fieldName === "emailId") {
        return form.emailId
    }
    if (fieldName === "password") {
        return form.password
    }
    if (fieldName === "confirmPass") {
        return form.confirmPass
    }
    if (fieldName === "phoneNumber") {
        return form.phoneNumber
    }
    if (fieldName === "aadhar") {
        return form.aadhar
    }
}

function validateConfirmPass() {
    var confirmPass = getFormElement("confirmPass");
    var currRow = getCurrentRow(confirmPass);
    var password = getFormElement("password");
    if (confirmPass.value != password.value) {
        updateTableRow(currRow + 1, "Confirm Password should match Password")
    } else {
        updateTableRow(currRow + 1, "")
    }

}



function updateTableRow(index, text) {
    var table = document.getElementById("myTable");
    var cell = table.rows[index].cells[1];
    cell.innerHTML = text;
    cell.classList.add("invalidText")

}