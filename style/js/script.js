cityInput = document.getElementById("userInput");
var today = moment().format("MMM Do, YYYY");
console.log(today);
var searchButton = document.getElementById("searchBtn");
// var testDiv = document.getElementById("test-div");
var temp = document.getElementById("temp");

searchButton.addEventListener("click", function (event){
    event.preventDefault();
    // var queryName = cityInput.value.trim();
    // console.log(queryName);
    var geocodeCityURL = "https://api.openweathermap.org/geo/1.0/direct?q=Encinitas&limit=5&appid=a914282a4259cce175b4a3f34d3738fb";
    fetch(geocodeCityURL)
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
            temp.textContent = JSON.stringify(data1.current.temp);
        })
    })
})

//make variables and new IDs for the temps on the search page

