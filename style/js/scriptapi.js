
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
   var urlSearchParams = new URLSearchParams(window.location.search);
var params = Object.fromEntries(urlSearchParams.entries());
var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(params.q);
if (isValidZip) {
getResults("zip="+params.q);
} else {
getResults("city="+params.q.toUpperCase());

}
console.log(isValidZip);
