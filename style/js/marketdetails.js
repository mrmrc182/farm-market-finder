// temp.textContent = JSON.stringify(data1.current.temp);
//             var img = document.createElement("img");
//             var iconCode = data1.current.weather[0].icon;
//             console.log(iconCode);
//             var iconURL = "https://openweathermap.org/img/wn/" + iconCode + ".png";
//             img.setAttribute("src", iconURL);
//             weatherIcon.appendChild(img);

var returnToSearch = document.getElementById("returnBtn");

returnToSearch.addEventListener("click", function(){
    window.location.href = "./search.html?q=Encinitas";
})

// fetch  market data
//fetch weather data

//fetch market name from previous page
//use that to populate market info, including city
//grab city data populated by the API to then pull data for weather
