const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formData = {};
  const formElements = this.elements;
  for (let element of formElements) {
    if (element.type !== 'submit') {
      formData[element.name] = element.value;
    }
  }
  
  const allFieldsFilled = Object.values(formData).every(value => value.trim() !== '');
  
  if (allFieldsFilled) {
    console.log(formData);
    this.reset();
  } else {
    alert('Please fill in all fields.');
  }
});

