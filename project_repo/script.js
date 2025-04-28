// Load glossary data from glossary.json and display it
async function loadGlossary() {
    const res = await fetch('glossary.json');
    const glossary = await res.json();
    displayGlossary(glossary);
  
    // Enable live search
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filtered = glossary.filter(item =>
        item.term.toLowerCase().includes(searchTerm) ||
        item.definition.toLowerCase().includes(searchTerm)
      );
      displayGlossary(filtered);
    });
  }
  
  // Render glossary cards into the container
  function displayGlossary(terms) {
    const container = document.getElementById('glossaryContainer');
    container.innerHTML = ''; // Clear previous content
  
    if (terms.length === 0) {
      container.innerHTML = '<p>No terms match your search.</p>';
      return;
    }
  
    terms.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h2>${item.term}</h2>
        <p>${item.definition}</p>
      `;
      container.appendChild(card);
    });
  }
  
  // Dark mode toggle
  document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  
  // Initialize glossary
  loadGlossary();
  