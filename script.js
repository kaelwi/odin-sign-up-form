let password = document.getElementById("password");
let confirmpwd = document.getElementById("confirm-password");

let submit = document.getElementById("submit");
let error = document.getElementById("pwd-error");

password.addEventListener('focus', hide);
confirmpwd.addEventListener('focus', hide);

function hide() {
  error.classList.add('hide');
  password.classList.remove('error');
  confirmpwd.classList.remove('error');
}

password.addEventListener('change', validate);
confirmpwd.addEventListener('change', validate);
submit.addEventListener('click', validate);

function validate(e) {
  if (password.value != '' && confirmpwd.value != '') {
    if (password.value != confirmpwd.value) {
      error.classList.remove('hide');
      password.classList.add('error');
      confirmpwd.classList.add('error');
      e.preventDefault();
    }
  }
}