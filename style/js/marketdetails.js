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

var getMarketData = function () {
    var urlMarketID = document.location.search;
    var marketID = urlMarketID.split("=")[1];
    var marketsURL = "https://data.sandiegocounty.gov/resource/xazp-q2tj.json?id=" + marketID;
    fetch(marketsURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
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
            var getWeatherData = function () {
                var weatherCity = marketCity.textContent;
                var marketTemp = document.getElementById("marketTemp");
                var weatherAPIURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + weatherCity + "&limit=3&appid=5926d68f5ae2aaf4153126ac58e885f6";
                fetch(weatherAPIURL)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        var geocodeLat = JSON.stringify(data[0].lat);
                        var geocodeLon = JSON.stringify(data[0].lon);
                        var nextURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + geocodeLat + "&lon=" + geocodeLon + "&appid=5926d68f5ae2aaf4153126ac58e885f6&units=imperial";
                        fetch(nextURL)
                            .then(function (response) {
                                return response.json();
                            })
                            .then(function (data1) {
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
                    //buttons
                var returnToSearch = document.getElementById("returnBtn");
                returnToSearch.addEventListener("click", function () {
                    window.location.href = "./search.html?q=" + weatherCity;
                })
                var searchButton = document.getElementById("searchBtn");
                var inputType = document.getElementById("searchInput");
                searchButton.addEventListener("click", function (event) {
                    event.preventDefault();
                    sessionStorage.clear();
                    var queryName = inputType.value.trim();
                    console.log(queryName);
                    window.location.href = "./search.html?q=" + queryName;
                    sessionStorage.setItem("City", queryName);
                })
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
