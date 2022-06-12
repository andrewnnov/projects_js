function generate() {
  var quotes = {
    "- Frank Zappa 1": "So many books, so little time.",
    "- Marcus Tullius Cicero":
      "A room without books is like a body without a soul.",
    "Author 3": "Quote 3",
  };

  var authors = Object.keys(quotes);
  console.log(authors);

  var author = authors[Math.floor(Math.random() * authors.length)];

  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
