var confirmButton = document.querySelector('.confirm button');

var allItemInputs = document.querySelectorAll('.item input');

var allItemInputsAddedUp = 0;

// the error message for 0 orders
var zeroError = document.querySelector('#error1');

// the error message for negative numbers
var negativeNumberError = document.querySelector('#error2')

//------------------------------------------------------------------------------

confirmButton.addEventListener('click', function() {
  // reset the error messages
  negativeNumberError.classList.remove('active');
  zeroError.classList.remove('active');
  // start counting from 0 again
  allItemInputsAddedUp = 0;
  allItemInputs.forEach((input, i) => {
    // add up all the ordered items
    allItemInputsAddedUp = allItemInputsAddedUp + Math.abs(input.value);
    // if any input is negative, activate the error message
    if (Math.sign(input.value) === -1) {
      negativeNumberError.classList.add('active');
    }
  });
  // if all items added up are 0, activate the error message
  if (allItemInputsAddedUp === 0) {
    zeroError.classList.add('active');
  }
});
