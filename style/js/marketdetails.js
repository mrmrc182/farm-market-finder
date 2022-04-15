var returnToSearch = document.getElementById("returnBtn");

returnToSearch.addEventListener("click", function(){
    window.location.href = "./search.html?q=Encinitas";
})

var marketCity = document.getElementById("city");
var marketName = document.getElementById("marketName");
var marketLocation = document.getElementById("location");
var marketManager = document.getElementById("marketManager");
var marketManagerPhone = document.getElementById("marketManagerPhone");
var marketManagerEmail = document.getElementById("marketManagerEmail");
var daysOpen = document.getElementById("daysOpen");
var season1Months = document.getElementById("season1months");
var season1Hours = document.getElementById("season1hours");
var marketZip = document.getElementById("zipcode");
var getMarketData = function(){
    var urlMarketID = document.location.search;
    var marketID = urlMarketID.split("=")[1];
    var marketsURL = "https://data.sandiegocounty.gov/resource/xazp-q2tj.json?id=" + marketID;
    fetch(marketsURL)
    .then(function (response){
        return response.json();
    }) 
    .then(function (data){
        console.log(data);
        console.log(data[0].city);
        marketCity.textContent = data[0].city;
        marketName.textContent = data[0].market_name;
        marketLocation.textContent = " " + data[0].market_location;
        marketManager.textContent = " " + data[0].market_manager;
        marketManagerPhone.textContent = " " + data[0].market_manager_phone;
        marketManagerEmail.textContent = " " + data[0].market_manager_email;
        daysOpen.textContent = " " + data[0].days_open;
        season1Months.textContent = " " + data[0].season_1_months + ": ";
        season1Hours.textContent = data[0].season_1_hours;
        marketZip.textContent = data[0].zip;
        weatherIcon = document.getElementById("weatherIcon");
        var getWeatherData = function(){
            var weatherCity = marketCity.textContent;
            var marketTemp = document.getElementById("marketTemp");
            var weatherAPIURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + weatherCity + "&limit=3&appid=a914282a4259cce175b4a3f34d3738fb";
            fetch (weatherAPIURL)
            .then(function(response){
                return response.json();
            })
            .then (function(data){
                var geocodeLat = JSON.stringify(data[0].lat);
                var geocodeLon = JSON.stringify(data[0].lon);
                var nextURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + geocodeLat + "&lon=" + geocodeLon + "&appid=a914282a4259cce175b4a3f34d3738fb&units=imperial";
                fetch(nextURL)
                .then(function(response){
                    return response.json();
                })
                .then (function (data1){
                    console.log(data1);
                    marketTemp.textContent = JSON.stringify(data1.current.temp);  
                    console.log(weatherIcon);
                    var iconCode1 = data1.current.weather[0].icon;
                    console.log(iconCode1);
                    var iconURL = "https://openweathermap.org/img/wn/" + iconCode1 + ".png";
                    console.log(iconURL);
                    weatherIcon.setAttribute("src", iconURL);  
                })
            })
            // insert it into the weather api
            // displays appropriate temperature and icon     
        }
        getWeatherData();
    })
}


getMarketData();

// fetch  market data
//fetch weather data

//fetch market name from previous page
//use that to populate market info, including city
//grab city data populated by the API to then pull data for weather
