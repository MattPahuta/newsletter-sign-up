const form = document.getElementById('subscribe-form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const dismissBtn = document.getElementById('dismiss-btn');

// update success message with submitted email
function updateSuccessMessage(email) {
  const confirmedEmail = document.getElementById('confirmed-email');
  confirmedEmail.textContent = email;
}

// toggle subscribe state - form card/success message
function toggleCard() {
  const signup = document.getElementById('signup');
  const success = document.getElementById('success');
  signup.classList.toggle('hidden');
  success.classList.toggle('hidden');
  // If error message is present, clear content and hide
  if (emailError.style.display === 'block') {
    emailError.style.display = 'none';
  }
}

// handle error messaging
function handleErrorState() {
  emailError.style.display = 'block';
  emailInput.classList.add('error-state');
}

// validate email submitted
function validateEmail(email) {
  const isValidEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return isValidEmail.test(email);
}

function handleSubmit(e) {
  e.preventDefault();
  const formDataEntries = new FormData(e.target).entries();
  const { email } = Object.fromEntries(formDataEntries);
  const isValidEmail = validateEmail(email); // true or false

  if (!isValidEmail) {
    return handleErrorState();
  }
  if (isValidEmail) {
    updateSuccessMessage(email);
    toggleCard();
  }
  emailInput.value = '';
}

// if error state for input is active, remove on focus of input
emailInput.addEventListener('focus', (event) => {
  if (event.target.classList.contains('error-state')) {
    event.target.classList.remove('error-state');
  }
})

form.addEventListener('submit', handleSubmit);
dismissBtn.addEventListener('click', toggleCard);