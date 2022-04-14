// User inputs a query
// goes to next page
// data from query is displayed on next page
var cityInput = document.getElementById("searchInput");
var searchButton = document.getElementById("searchBtn");

searchButton.addEventListener("click", function (event){
    event.preventDefault();
    var queryName = cityInput.value.trim();
    console.log(queryName);
    window.location.href= "./search.html?q=" + queryName;
    localStorage.setItem("City", queryName);
})