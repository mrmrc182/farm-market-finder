cityInput = document.getElementById("searchInput");
// var today = moment().format("MMM Do, YYYY");
// console.log(today);
var searchButton = document.getElementById("searchBtn");
// var testDiv = document.getElementById("test-div");
var temp = document.getElementById("temp");
var weatherIcon = document.getElementById("weatherIcon");
var searchTemp1 = document.getElementById("searchTemp1");
var searchWeatherIcon1 = document.getElementById("searchWeatherIcon1");
var searchWeatherImage1 = document.getElementById("searchWeatherImage1");
//second weather and icon info
var searchTemp2 = document.getElementById("searchTemp2");
var searchWeatherIcon2 = document.getElementById("searchWeatherIcon2");
//third weather and icon info
var searchTemp3 = document.getElementById("searchTemp3");
var searchWeatherIcon3 = document.getElementById("searchWeatherIcon3");

function init(){
    var queryName = sessionStorage.getItem("City");
    console.log(queryName);
    var geocodeCityURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + queryName + "&limit=5&appid=a914282a4259cce175b4a3f34d3738fb";
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
            searchTemp1.textContent = JSON.stringify(data1.current.temp);
            console.log(searchTemp1); 
            var iconCode1 = data1.current.weather[0].icon;
            var iconURL = "https://openweathermap.org/img/wn/" + iconCode1 + ".png";
            searchWeatherImage1.setAttribute("src", iconURL);
         
            //searchweatherIccon 2
            searchTemp2.textContent = JSON.stringify(data1.current.temp);
            var iconCode2 = data1.current.weather[0].icon;
            var iconURL = "https://openweathermap.org/img/wn/" + iconCode2 + ".png";
            searchWeatherImage2.setAttribute("src", iconURL);
            //searchWeatherIcon 3
            searchTemp3.textContent = JSON.stringify(data1.current.temp);
            var iconCode3 = data1.current.weather[0].icon;
            var iconURL = "https://openweathermap.org/img/wn/" + iconCode3 + ".png";
            searchWeatherImage3.setAttribute("src", iconURL);
        })
    })
    var initialSearch = queryName.toUpperCase();
    var marketName1 = document.getElementById("marketName1");
    var location1 = document.getElementById("location1");
    var marketName2 = document.getElementById("marketName2");
    var location2 = document.getElementById("location2");
    var marketName3 = document.getElementById("marketName3");
    var location3 = document.getElementById("location3");
    console.log(queryName);
    var geocodeCityURL = "https://data.sandiegocounty.gov/resource/xazp-q2tj.json?city=" + initialSearch;
    
    fetch(geocodeCityURL)
    .then(function (response){
        return response.json();
    
    })
    .then(function (data){
        console.log(data);
        marketName1.textContent = data[0].market_name;
        location1.textContent = data[0].market_location;
        marketName2.textContent = data[1].market_name;
        location2.textContent = data[1].market_location;
        marketName3.textContent = data[2].market_name;
        location3.textContent = data[2].market_location;
        var marketID1 = data[0].id;
        var marketID2 = data[1].id;
        var marketID3 = data[2].id;
        //first result button
        result1.addEventListener("click", function(){
            window.location.href= "./market-details.html?id=" + marketID1;
            //will need to pull the market name
        })
        result2.addEventListener("click", function(){
            window.location.href= "./market-details.html?id=" + marketID2;
            //will need to pull the market name
        })
        result3.addEventListener("click", function(){
            window.location.href= "./market-details.html?id=" + marketID3;
            //will need to pull the market name
        })

    })
}



init();

//click anywhere on div element, will take them to the details page which will populate with information from the city
var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");



// result1.addEventListener("click", function(){
//     window.location.href= "./market-details.html?q=Encinitas";
//     //will need to pull the market name
// })
result2.addEventListener("click", function(){
    window.location.href= "./market-details.html?q=Encinitas";
    //will need to pull the market name
})
result3.addEventListener("click", function(){
    window.location.href= "./market-details.html?q=Encinitas";
    //will need to pull the market name
})

//when you click the button, populates a new search page
searchButton.addEventListener("click", function (event){
    event.preventDefault();
    var queryName = cityInput.value.trim();
    console.log(queryName);
    var geocodeCityURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + queryName + "&limit=5&appid=a914282a4259cce175b4a3f34d3738fb";
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
            searchTemp1.textContent = JSON.stringify(data1.current.temp);
            console.log(searchTemp1); 
            var iconCode1 = data1.current.weather[0].icon;
            console.log(iconCode1);
            var iconURL = "https://openweathermap.org/img/wn/" + iconCode1 + ".png";
            searchWeatherImage1.setAttribute("src", iconURL);
            //searchweatherIccon 2
            searchTemp2.textContent = JSON.stringify(data1.current.temp);
            console.log(searchTemp2); 
            var iconCode2 = data1.current.weather[0].icon;
            console.log(iconCode2);
            var iconURL = "https://openweathermap.org/img/wn/" + iconCode2 + ".png";
            searchWeatherImage2.setAttribute("src", iconURL);
            //searchWeatherIcon 3
            searchTemp3.textContent = JSON.stringify(data1.current.temp);
            console.log(searchTemp3); 
            var iconCode3 = data1.current.weather[0].icon;
            console.log(iconCode3);
            var iconURL = "https://openweathermap.org/img/wn/" + iconCode3 + ".png";
            searchWeatherImage3.setAttribute("src", iconURL);
        })
    })
    var initialSearch = queryName.toUpperCase();
    console.log(initialSearch);
    var marketName1 = document.getElementById("marketName1");
    var location1 = document.getElementById("location1");
    var marketName2 = document.getElementById("marketName2");
    var location2 = document.getElementById("location2");
    var marketName3 = document.getElementById("marketName3");
    var location3 = document.getElementById("location3");
    console.log(initialSearch);
    var geocodeCityURL = "https://data.sandiegocounty.gov/resource/xazp-q2tj.json?city=" + initialSearch;
    
    fetch(geocodeCityURL)
    .then(function (response){
        return response.json();
    
    })
    .then(function (data){
        console.log(data);
        console.log(data[0].market_name);
        marketName1.textContent = data[0].market_name;
        location1.textContent = data[0].market_location;
        marketName2.textContent = data[1].market_name;
        location2.textContent = data[1].market_location;
        marketName3.textContent = data[2].market_name;
        location3.textContent = data[2].market_location;

    })
})

//make variables and new IDs for the temps on the search page

