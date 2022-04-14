cityInput = document.getElementById("userInput");
// var today = moment().format("MMM Do, YYYY");
// console.log(today);
var searchButton = document.getElementById("searchBtn");
// var testDiv = document.getElementById("test-div");
var temp = document.getElementById("temp");
var weatherIcon = document.getElementById("weatherIcon");
var searchTemp1 = document.getElementById("searchTemp1");
var searchWeatherIcon1 = document.getElementById("searchWeatherIcon1");
//second weather and icon info
var searchTemp2 = document.getElementById("searchTemp2");
var searchWeatherIcon2 = document.getElementById("searchWeatherIcon2");
//third weather and icon info
var searchTemp3 = document.getElementById("searchTemp3");
var searchWeatherIcon3 = document.getElementById("searchWeatherIcon3");

//when you click the button, populates a new search page
searchButton.addEventListener("click", function (event){
    event.preventDefault();
    var queryName = cityInput.value.trim();
    console.log(queryName);
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
            //market-details dynamic display
            // temp.textContent = JSON.stringify(data1.current.temp);
            // var img = document.createElement("img");
            // var iconCode = data1.current.weather[0].icon;
            // console.log(iconCode);
            // var iconURL = "https://openweathermap.org/img/wn/" + iconCode + ".png";
            // img.setAttribute("src", iconURL);
            // weatherIcon.appendChild(img);
            //search dynamic display
            searchTemp1.textContent = JSON.stringify(data1.current.temp);
            console.log(searchTemp1); 
            var img = document.createElement("img");
            var iconCode1 = data1.current.weather[0].icon;
            console.log(iconCode1);
            var iconURL = "https://openweathermap.org/img/wn/" + iconCode1 + ".png";
            img.setAttribute("src", iconURL);
            searchWeatherIcon1.appendChild(img);
            //searchweatherIccon 2
            searchTemp2.textContent = JSON.stringify(data1.current.temp);
            console.log(searchTemp2); 
            var img = document.createElement("img");
            var iconCode2 = data1.current.weather[0].icon;
            console.log(iconCode2);
            var iconURL = "https://openweathermap.org/img/wn/" + iconCode2 + ".png";
            img.setAttribute("src", iconURL);
            searchWeatherIcon2.appendChild(img);
            //searchWeatherIcon 3
            searchTemp3.textContent = JSON.stringify(data1.current.temp);
            console.log(searchTemp3); 
            var img = document.createElement("img");
            var iconCode3 = data1.current.weather[0].icon;
            console.log(iconCode3);
            var iconURL = "https://openweathermap.org/img/wn/" + iconCode3 + ".png";
            img.setAttribute("src", iconURL);
            searchWeatherIcon3.appendChild(img);
        })
    })
})

//make variables and new IDs for the temps on the search page

