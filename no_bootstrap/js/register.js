var loginForm = document.querySelector('form.register');
var allInputs = document.querySelectorAll('form.register input');


function validate() {

  isValid = true;

  for (var i = 0; i < allInputs.length; i++) {

    allInputs[i].classList.remove('is-invalid');
    allInputs[i].nextElementSibling.classList.remove('is-invalid');

    switch (allInputs[i].name) {
      case 'firstname':
      case 'lastname':
        if (allInputs[i].value == '') {
          isValid = false;
          allInputs[i].classList.add('is-invalid');
          allInputs[i].nextElementSibling.classList.add('is-invalid');
        }
        break;
      case 'email':
        var regExpEmail = /.+@.+\..+/; // a@b.case
        if (allInputs[i].value.match(regExpEmail) == null) {
          isValid = false;
          allInputs[i].classList.add('is-invalid');
          allInputs[i].nextElementSibling.classList.add('is-invalid');
          allInputs[i].nextElementSibling.innerHTML = 'Wrong Email Format';
        }
        break;
      case 'password':
      case 'password2':
        if (allInputs[i].value.length < 8) {
          isValid = false;
          allInputs[i].classList.add('is-invalid');
          allInputs[i].nextElementSibling.classList.add('is-invalid');
          allInputs[i].nextElementSibling.innerHTML = 'Too short';
        } else {
          var passwordValue = document.querySelector('#password').value;
          var password2Value = document.querySelector('#password2').value;
          if (passwordValue != password2Value) {
            isValid = false;
            allInputs[i].classList.add('is-invalid');
            allInputs[i].nextElementSibling.classList.add('is-invalid');
            allInputs[i].nextElementSibling.innerHTML = 'Password and Confirmation do not match';
          }

        }

        break;

      case 'agb':
        if (!allInputs[i].checked) {
          isValid = false;
          allInputs[i].nextElementSibling.classList.add('is-invalid');
        }
    }

  }

  return isValid;

}

loginForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  if (validate() == true) {
    console.log('submit');
    //loginForm.submit();
  } else {
    console.log('please change inputs');
  }

});
