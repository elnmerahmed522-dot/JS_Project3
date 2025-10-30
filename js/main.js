function validation() {
  var user = document.getElementById("user").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var confrim = document.getElementById("confirmPass").value;
  var errorMessage = document.getElementById("errorMessage");
  if (user == "" && email == "" && pass == "" && confrim == "") {
    errorMessage.innerHTML = `<div class="alert alert-danger"> Please Enter a Data</div>`;
    return false;
  } else if (user.length < 5 || user.length > 15) {
    errorMessage.innerHTML = `<div class="alert alert-danger"> Enter 5-15 Charcter in Username </div>`;
    return false;
  } else if (email.indexOf("@", 3) == -1 || email.indexOf(".com") == -1) {
    errorMessage.innerHTML = `<div class="alert alert-danger"> Enter Valid Email </div>`;
    return false;
  } else if (pass.length < 8) {
    errorMessage.innerHTML = `<div class="alert alert-danger"> Enter 8 charcter in password  </div>`;
    return false;
  } else if (confrim != pass) {
    errorMessage.innerHTML = `<div class="alert alert-danger"> Matched password  </div>`;
    return false;
  }
}
