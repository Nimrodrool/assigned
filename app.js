const companies = ["Apple", "Microsoft", "Google", "Amazon", "Facebook", "Tesla", "Jfrog", "Mindpace", "Wiz", "Wix", "Intel"];

function showSuggestions(value) {
    const suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = ""; // Clear previous suggestions

    if (value) {
      const filtered = companies.filter(company => company.toLowerCase().includes(value.toLowerCase()));
      
       // Only show suggestions if there are matches
       if (filtered.length > 0) {
        filtered.forEach(company => {
          const li = document.createElement("li");
          li.textContent = company;
          li.onclick = () => {
            document.getElementById("company").value = company; // Fill input with selected company
            suggestions.innerHTML = ""; // Clear suggestions
            suggestions.classList.remove('suggestionsOn')

          };
          suggestions.appendChild(li);
          suggestions.classList.add('suggestionsOn')

        });
      }
    }
  }
