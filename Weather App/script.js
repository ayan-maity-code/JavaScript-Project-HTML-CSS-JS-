const serachBox = document.querySelector(".search input")
const serachBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=338da03454f65acba106e4fac1544b64&units=metric`)
    var data = await response.json();
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else{
        document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = parseInt(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    // if(data.weather[0].main == "Clear"){
    //     weatherIcon.src = "images/clear.png"
    // }else if(data.weather[0].main == "Clouds"){
    //     weatherIcon.src = "images/clouds.png"
    // }else if(data.weather[0].main == "Drizzle"){
    //     weatherIcon.src = "images/drizzle.png"
    // }else if(data.weather[0].main == "Rain"){
    //     weatherIcon.src = "images/rain.png"
    // }else if(data.weather[0].main == "Mist"){
    //     weatherIcon.src = "images/mist.png"
    // }else if(data.weather[0].main == "Snow"){
    //     weatherIcon.src = "images/snow.png"
    // }
    const weatherImages = {
        "Clear": "images/clear.png",
        "Clouds": "images/clouds.png",
        "Drizzle": "images/drizzle.png",
        "Rain": "images/rain.png",
        "Mist": "images/mist.png",
        "Snow": "images/snow.png"
    };
    
    if (data.weather[0].main in weatherImages) {
        weatherIcon.src = weatherImages[data.weather[0].main];
    }
    

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
    }
    
    
}

serachBtn.addEventListener("click" , () =>{
        checkWeather(serachBox.value);
})


const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', function() {
    // Clear the text from the search bar
    searchInput.value = '';
});



// Chat gpt formated code

// const searchInput = document.getElementById('searchInput');
// const searchButton = document.getElementById('searchButton');

// // Function to perform search
// async function performSearch() {
//     const city = searchInput.value.trim();
//     if (city === '') {
//         return; // Do not perform search if the input is empty
//     }

//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=338da03454f65acba106e4fac1544b64&units=metric`);
//         const data = await response.json();
//         if (response.status == 404) {
//             document.querySelector(".error").style.display = "block";
//             document.querySelector(".weather").style.display = "none";
//         } else {
//             document.querySelector(".city").innerHTML = data.name;
//             document.querySelector(".temp").innerHTML = parseInt(data.main.temp) + "°c";
//             document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//             document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

//             if (data.weather[0].main == "Clear") {
//                 weatherIcon.src = "images/clear.png";
//             } else if (data.weather[0].main == "Clouds") {
//                 weatherIcon.src = "images/clouds.png";
//             } else if (data.weather[0].main == "Drizzle") {
//                 weatherIcon.src = "images/drizzle.png";
//             } else if (data.weather[0].main == "Rain") {
//                 weatherIcon.src = "images/rain.png";
//             } else if (data.weather[0].main == "Mist") {
//                 weatherIcon.src = "images/mist.png";
//             } else if (data.weather[0].main == "Snow") {
//                 weatherIcon.src = "images/snow.png";
//             }

//             document.querySelector(".weather").style.display = "block";
//             document.querySelector(".error").style.display = "none";
//         }
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }
// }

// // Add event listener to search button
// searchButton.addEventListener('click', performSearch);

// // Add event listener to search input for Enter key press
// searchInput.addEventListener('keyup', function(event) {
//     // Check if Enter key was pressed (key code 13)
//     if (event.key === "Enter") {
//         performSearch();
//     }
// });
