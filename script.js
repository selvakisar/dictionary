 function searchDictionary() {
      const searchInput = document.getElementById('search-input').value;
      const definitionContainer = document.getElementById('definition');
      // const definitionContainer1 = document.getElementById('definition1');

      // Clear previous definition
      definitionContainer.innerHTML = '';
      // definitionContainer1.innerHTML = '';

      // Fetch data from the API
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.length > 0) {
            const definition = data[0].meanings[0].definitions[0].definition;
            // const definition1 = data[0].meanings[1].definitions[0].definition;
            definitionContainer.textContent = `Definition: ${definition}`;
            // definitionContainer1.textContent = `Definition: ${definition1}`;
          } else {
            definitionContainer.textContent = 'Word not found';
            // definitionContainer1.textContent = 'another definition not found' ;
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          definitionContainer.textContent = 'Error fetching data';
        });
    }