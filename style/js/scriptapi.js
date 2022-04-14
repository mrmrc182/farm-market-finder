
// fetch(apiUrl)
//     .then(function (res) {
//      return res.json();
//     })
//     .then(function (data) {
//      console.log(data)
//     })
//     .catch(function (err) {
//      console.error(err);
//     });
var q = "Vista";

function getResults(q) {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        // submit a get request to the restful service zipSearch or locSearch.
        url: "https://data.sandiegocounty.gov/resource/xazp-q2tj.json?" + q,
    }).then(function (response) {
        console.log(response);
        console.log(response[0].market_name);
        console.log(response[0].market_location);
        console.log(response[0].market_manager_phone);
        console.log(response[0].manager_Email);
        console.log(response[0].days_open);
        console.log(response[0].season_1_months);
        console.log(response[0].season_1_hours);
        console.log(response[0].season_2_months);
        console.log(response[0].season_2_hours);
        console.log(response[0].location1);
        console.log(response[0].city);
        console.log(response[0].zip);
        console.log(response[0].id);
    });
    
}
   //get search string from url 
//    var urlSearchParams = new URLSearchParams(window.location.search);
// var params = Object.fromEntries(urlSearchParams.entries());
// var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(params.q);
// if (isValidZip) {
// getResults("zip="+params.q);
// } else {
// getResults("city="+params.q.toUpperCase());

// }
// console.log(isValidZip);

    // var initialSearch = sessionStorage.getItem("City");
    var initialSearch = "SAN DIEGO";
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
    //     var geocodeLat = JSON.stringify(data[0].lat);
    //     var geocodeLon = JSON.stringify(data[0].lon);
    //     queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + geocodeLat + "&lon=" + geocodeLon + "&appid=a914282a4259cce175b4a3f34d3738fb&units=imperial";
    //     fetch(queryURL)
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then (function (data1){

    //     