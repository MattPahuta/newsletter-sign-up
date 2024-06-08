const subscribeCard = document.getElementById('subscribe-card');
const successCard = document.getElementById('success-card');
const form = document.getElementById('subscribe-form');
const emailInput = document.getElementById('email');
const confirmedEmail = document.getElementById('confirmed-email');
const dismissBtn = document.getElementById('dismiss-btn');

// update success message with submitted email
function updateSuccessMessage(email) {
  console.log('updateSuccessMessage function firing');
  confirmedEmail.textContent = email;
}

// toggle subscribe state - form card/success message
function toggleCard() {

  // check if error state exists
  // if (emailInput.classList.contains('error-state')) {
  //   emailInput.classList.remove('error-state');
  // }
  console.log('toggleCard function firing');
  subscribeCard.classList.toggle('hidden');
  successCard.classList.toggle('hidden');
}

// handle error messaging
function handleErrorState() {
  const emailError = document.getElementById('email-error');
  emailError.style.display = 'block'
  emailInput.classList.add('error-state')
  console.log('handleErrorMessag function firing')
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

  const isValidEmail = validateEmail(email);

  if (!isValidEmail) {
    console.log(isValidEmail)
    return handleErrorState();
  }
  if (isValidEmail) {
    console.log(isValidEmail)
    updateSuccessMessage(email);
    toggleCard();
  }

  console.log('submitted email: ', email);
  console.log('form submitted');
  emailInput.value = '';
}

// if error state is active, remove on focus of input
emailInput.addEventListener('focus', (event) => {
  if (event.target.classList.contains('error-state')) {
    event.target.classList.remove('error-state');
  }
})

form.addEventListener('submit', handleSubmit);

dismissBtn.addEventListener('click', toggleCard);