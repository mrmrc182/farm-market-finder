cityInput = document.querySelector("query");
var today = moment().format("MMM Do, YYYY");
console.log(today);
var searchButton = document.getElementById("search-btn");
var testDiv = document.getElementById("test-div");

searchButton.addEventListener("click", function (event){
    event.preventDefault();
    // var queryName = cityInput.value.trim();
    var geocodeURL = "https://api.openweathermap.org/geo/1.0/direct?q=Encinitas&limit=5&appid=a914282a4259cce175b4a3f34d3738fb";
    // if (queryName){
    //     cityInput.value = " ";
    // } else {
    //     alert("Please enter the name of a city or a zip code");
    // }
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
            var tempDisplay = document.createElement("h3");
            tempDisplay.textContent = "Current temp: " + JSON.stringify((data1.current.temp)) + " Degrees Fahrenheit";
            testDiv.appendChild(tempDisplay);
        })
    })
})

//Shawn API code here: 



