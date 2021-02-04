// the input field for the email address
var emailInput = document.querySelector('.footer input');

// the button to confirm the signup
var newsletterButton = document.querySelector('.footer button');

// the error message in case of a wrong input
var errorMessage = document.querySelector('#email-error');

//------------------------------------------------------------------------------

// check if the entered email has a valid format (a@a.a)
function checkEmail() {
  errorMessage.classList.remove('active');
  var regExpEmail = /.+@.+\..+/; // a@b.case
  if (emailInput.value.match(regExpEmail) == null) {
    errorMessage.classList.add('active');
  }
}

//------------------------------------------------------------------------------

// listen for click event
newsletterButton.addEventListener('click', checkEmail);
