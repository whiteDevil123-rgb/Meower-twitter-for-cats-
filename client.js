// form should submitted
const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const API_URL = 'https://localhost:5000/mews'

loadingElement.style.display = 'none'

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');
  
  const  mew = {
    name, 
    content
  };
  form.style.display = 'none'
  loadingElement.style.display = '';

  fetch(API_URL, {
    method: "POST",
    body: "mew",
    headers: {
      'content-type': 'application/json';
    };
  })
})