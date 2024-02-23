const emailLabel = document.querySelector('#email-label');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

emailInput.addEventListener('keyup', validEmail);
emailInput.addEventListener('focus', labelFocus);
// window.addEventListener('click', labelFocusOut)

function validEmail() {
  emailLabel.style.bottom = '45px';

  if (
    !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailInput.style.borderBottomColor = 'red';
    emailError.innerHTML = 'Please inter a valid email';
    emailError.style.top = '120%';

    return false;
  }

  emailError.innerHTML = '';
  emailInput.style.borderBottomColor = 'green';
  emailError.style.top = '100%';
  return true;
}

function labelFocus() {
  emailLabel.style.bottom = '45px';
}

// function labelFocusOut () {
//     emailLabel.style.bottom = '5px';
// }
