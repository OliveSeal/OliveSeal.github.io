fetch('database.json')
  .then(response => response.json())
  .then(data => {
    const jsonDisplay = document.getElementById('json-display');
    jsonDisplay.textContent = JSON.stringify(data);
  })
  .catch(error => console.error(error));