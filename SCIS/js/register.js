'use strict';

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function goHome() {
    var loc = window.location.href
    location.href = "#home";
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