const searchForm = document.getElementById('search-form');
const searchResult = document.getElementById('search-result');
const searchBox = document.getElementById('search-box');
const showMoreBtn = document.getElementById('show-more-btn');

let keyword = ""
let page = 1

async function searchImages(){
    keyword = searchBox.value
    const data = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=DM8aC7BTqiea2mi2hCsDm4_Ovo8e8If80Okxny8JD8k&per_page=12`)

    const response = await data.json()
    
    if(page === 1){
        searchResult.innerHTML =""
    }

    const results = response.results
   results.map((result) => {
     const image = document.createElement('img')
     image.src = result.urls.small
     const imageLink = document.createElement('a')
     imageLink.href = result.links.html
    imageLink.target = '_blank'
     imageLink.appendChild(image)
     const p = searchResult.appendChild(imageLink)
   })

   showMoreBtn.style.display = 'block'
}

searchForm.addEventListener('submit' , (e) => {
    e.preventDefault()
    page = 1;
    searchImages()
})

showMoreBtn.addEventListener('click',() =>{
    page++
    searchImages()
})


searchBox.addEventListener('keyup' , (e) =>{
    if(e.key === 'Enter') {
        e.preventDefault();
        searchImages();
    }
    page++
})
// const animals = ['donkey', 'elephant', 'dog', 'cow', 'crow', 'hen'];
// let selectedAnimalIndex = 0;

// async function searchImages(){
//     keyword = searchBox.value.toLowerCase();
//     console.log(keyword);

//     // Get the next animal in the cycle
//     const animalQuery = animals[selectedAnimalIndex];

//     const data = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${animalQuery}&client_id=DM8aC7BTqiea2mi2hCsDm4_Ovo8e8If80Okxny8JD8k&per_page=12`);
//     const response = await data.json();
    
//     if(page === 1){
//         searchResult.innerHTML ="";
//     }

//     const results = response.results;
//     results.map((result) => {
//         const image = document.createElement('img');
//         image.src = result.urls.small;
//         const imageLink = document.createElement('a');
//         imageLink.href = result.links.html;
//         imageLink.target = '_blank';
//         imageLink.appendChild(image);
//         const p = searchResult.appendChild(imageLink);
//     });

//     showMoreBtn.style.display = 'block';

//     // Update the selected animal index for the next search
//     selectedAnimalIndex = (selectedAnimalIndex + 1) % animals.length;
// }

// searchForm.addEventListener('submit' , (e) => {
//     e.preventDefault();
//     page = 1;
//     searchImages();
// });

// showMoreBtn.addEventListener('click',() =>{
//     page++;
//     searchImages();
// });

// if(searchBox.innerHTML === 'rupan'){
//     searchImages();
// }
