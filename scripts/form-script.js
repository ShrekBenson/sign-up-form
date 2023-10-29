const FORM = document.getElementById('signup');
const FIELDS = FORM.querySelectorAll('input');
const PASS = FORM.querySelector('#password');
const C_PASS = FORM.querySelector('#passwordConfirmed');

FORM.addEventListener('submit', (e) => {
  FIELDS.forEach(field => {
    if (field.validity.valueMissing) {      
      field.nextElementSibling.classList.add('error');
      field.nextElementSibling.textContent = "* there is no value entered";
      field.nextElementSibling.style.color = "red";
      e.preventDefault();
      setTimeout(() => {
        field.nextElementSibling.textContent = "";
      }, 3000);
    } else if (field.validity.typeMismatch) {
      field.nextElementSibling.classList.add('error');
      field.nextElementSibling.textContent = "* the value entered is invalid";
      e.preventDefault();
      setTimeout(() => {
        field.nextElementSibling.textContent = "";
      }, 3000);
    } else if (field.validity.patternMismatch) {
      field.nextElementSibling.classList.add('error');
      field.nextElementSibling.textContent = "* enter a telephone number of 10 digits";
      e.preventDefault();
      setTimeout(() => {
        field.nextElementSibling.textContent = "";
      }, 3000);
    }    
  })

  if (PASS.validity.tooShort) {
    PASS.nextElementSibling.classList.add('error');
    PASS.nextElementSibling.textContent = "* the value entered is too short";
    e.preventDefault();
  } 
  if (PASS.value === "") {
    C_PASS.nextElementSibling.textContent = "* first enter a password";
    C_PASS.nextElementSibling.classList.add('error');
    e.preventDefault();
    setTimeout(() => {
      C_PASS.nextElementSibling.textContent = "";
    }, 3000);
  } else if (PASS.value !== C_PASS.value) {
    C_PASS.nextElementSibling.textContent = "* passwords do not match";
    C_PASS.nextElementSibling.classList.add('error');
    e.preventDefault();
  }   
});

FORM.addEventListener('input', () => {
  if (PASS.value === "") {
    PASS.nextElementSibling.textContent = "";
  } else if (PASS.validity.tooShort) {
    PASS.nextElementSibling.classList.add('error');
    PASS.nextElementSibling.textContent = "* the password entered is too short";    
    PASS.nextElementSibling.style.color = "red";
  } else if (PASS.value === C_PASS.value) {
    PASS.nextElementSibling.textContent = "the password is strong enough";
      PASS.nextElementSibling.style.color = "green";
    C_PASS.nextElementSibling.textContent = "passwords do match";
    C_PASS.nextElementSibling.classList.add('error');
    C_PASS.nextElementSibling.style.color = "green";
  } else{
    if (C_PASS.value === "") {
      PASS.nextElementSibling.textContent = "the password is strong enough";
      PASS.nextElementSibling.style.color = "green";
      C_PASS.nextElementSibling.textContent = "";
    } else{
      PASS.nextElementSibling.textContent = "the password is strong enough";
      PASS.nextElementSibling.style.color = "green";
      C_PASS.nextElementSibling.textContent = "* passwords do not match";
      C_PASS.nextElementSibling.classList.add('error');
      C_PASS.nextElementSibling.style.color = "red";      
    }
  }
})