fetch('/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById('userData').textContent = JSON.stringify(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });