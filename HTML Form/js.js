function validUSAZipCode(str) {
  return /^\d{5}(-\d{4})?$/.test(str);
}

function validateInput() {
  console.log("validateInput");
  let zipCode = document.getElementById('zipcode').value;
  let message = "";
  if (validUSAZipCode(zipCode)) {
    message = "";
  } else {
    message = "Invalid Zip Code";
  }
  document.getElementById('feedback').innerHTML = message;
}

function custValidation() {
  var frm = document.forms["RegisterForm"];
  if(frm.zipcode.value > 5) {
    sfm_show_error_msg(alert("Invalid Zip Code"), frm.zipcode);
    return false;
  } else {
    return true;
  }
}
