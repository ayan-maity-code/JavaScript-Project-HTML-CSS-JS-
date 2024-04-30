const blogContainer = document.getElementById("bolg-container");
const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("search-input");
let keyword = "";
async function getNews() {
  keyword = searchBox.value;
  const data = await fetch(
    `https://newsapi.org/v2/everything?q=${keyword}&pageSize=12&apiKey=6d7d261879914ede8f176761591dc249`
  );

  const response = await data.json();
  const articles = response.articles;
  blogContainer.innerHTML = '';
  articles.map((article) => {
    if (
      article.title.toLowerCase().includes("removed") ||
      article.description.toLowerCase().includes("removed")
    ) {
      return; // Skip this article if it indicates it has been removed
    }

    const div = document.createElement("div");
    div.classList.add("blog-card");
    const image = document.createElement("img");
    image.src = article.urlToImage;
    image.alt = article.title;
    const h2 = document.createElement("h2");

    const truncateTitle =
      article.title.length > 30
        ? article.title.slice(0, 30) + "..."
        : article.title;
    h2.textContent = truncateTitle;

    const p = document.createElement("p");

    const truncateDescription =
      article.description.length > 120
        ? article.description.slice(0, 120) + "..."
        : article.description;
    p.textContent = truncateDescription;

    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(p);
    blogContainer.appendChild(div);

    div.addEventListener("click", () => {
      window.open(article.url, "_blank");
    });
  });
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getNews();
});

searchBox.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        getNews();
    }
    
});