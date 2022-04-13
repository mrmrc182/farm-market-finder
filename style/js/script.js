cityInput = document.querySelector("query");
var today = moment().format("MMM Do, YYYY");
console.log(today);
var searchButton = document.getElementById("search-btn");
var testDiv = document.getElementById("test-div");
var temp = document.getElementById("temp");

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
            temp.textContent = JSON.stringify(data1.current.temp);
        })
    })
})

//Shawn API code here: 
const marketList = document.getElementById('marketList');
const searchBar = document.getElementById('searchBar');
let farmMarkets = [];

searchButton.addEventListener('click', function () {
    const searchString = res.json();

    const filteredMarkets = farmMarkets.filter((market) => {
        return (
            market.name.includes(searchString) ||
            market.location.includes(searchString)
        );
    });
    displayMarkets(filteredMarkets);
});

const loadMarkets = async () => {
    try {
        const res = await fetch('https://data.sandiegocounty.gov/resource/xazp-q2tj.json');
        farmMarkets = await res.json();
        displayMarkets(farmMarkets);
    } catch (err) {
    }
};

const displayMarkets = (markets) => {
    const htmlString = markets
        .map((market) => {
            return `
            <li class="market">
                <h2>${market.name}</h2>
                <p>Location: ${market.location}</p>
                <img src="${market.image}"></img>
            </li>
        `;
        })
        .join('');
    marketList.innerHTML = htmlString;
};

loadMarkets();


