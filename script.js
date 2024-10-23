docment.getElementById('registration-form').addEventListenser('submit', function(event) {
  event.preventDefault();

const email = document.getElementById('email').value;
const password = docment.ElementById('password').value;
const credentials = document.ElementById('credentials').value;

console.log('Registration Data:', {email, password, credentials});
  function loadEmployeeData() {
    console.log('Loading employee data...');
