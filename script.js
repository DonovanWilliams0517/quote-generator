const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");

let quotes = [];

function showRandomQuote() {
    if (quotes.length === 0) return;

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `– ${quote.author}`;
}

// Fetch from local JSON file
fetch("quotes.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not fetch quotes.");
        }
        return response.json();
    })
    .then(data => {
        quotes = data;
        showRandomQuote(); // Show one quote once loaded
    })
    .catch(error => {
        quoteText.textContent = "Failed to load quotes.";
        quoteAuthor.textContent = "";
        console.error(error);
    });

newQuoteBtn.addEventListener("click", showRandomQuote);
