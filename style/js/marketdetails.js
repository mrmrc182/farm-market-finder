temp.textContent = JSON.stringify(data1.current.temp);
            var img = document.createElement("img");
            var iconCode = data1.current.weather[0].icon;
            console.log(iconCode);
            var iconURL = "https://openweathermap.org/img/wn/" + iconCode + ".png";
            img.setAttribute("src", iconURL);
            weatherIcon.appendChild(img);