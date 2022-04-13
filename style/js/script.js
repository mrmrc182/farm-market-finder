cityInput = document.querySelector("query");
var today = moment().format("MMM Do, YYYY");
console.log(today);
var searchButton = document.getElementById("search-btn");
var testDiv = document.getElementById("test-div");
var temp = document.getElementById("temp");

searchButton.addEventListener("click", function (event){
    event.preventDefault();
    var queryName = cityInput.value.trim();
    console.log(queryName);
    // var geocodeURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + queryName + "&limit=5&appid=a914282a4259cce175b4a3f34d3738fb";
    // I want to check if the query input is a zip code or a city name
    //THEN i want to grab the lat lon of that data.
    // if (queryName){
    //     cityInput.value = " ";
    // } else {
    //     alert("Please enter the name of a city or a zip code");
    // }
    // clearly define input and output before trying to pseudocode
    // in function we need to log market name and market city
    // issue of input ID on page
    // check review part 2
    fetch(geocodeURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        var geocodeLat = JSON.stringify(data[0].lat);
        var geocodeLon = JSON.stringify(data[0].lon);
        queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + geocodeLat + "&lon=" + geocodeLon + "&appid=a914282a4259cce175b4a3f34d3738fb&units=imperial";
        fetch(queryURL)
        .then(function(response){
            return response.json();
        })
        .then (function (data1){
            console.log(data1);
            console.log(data1.current.temp);
            // temp.textContent = data1.current.temp;
        })
    })
})

