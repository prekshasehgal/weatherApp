const apiKey = "538b9a05877db4c849fda2a3f5e3454b";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
const body = document.querySelector("body");


async function checkWeather(city)  {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }



    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
        body.style.backgroundImage = "url('clouds1.gif')";

    }

    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png"
        body.style.backgroundImage = "url('sunny.gif')";
    }

    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png"
        body.style.backgroundImage = "url('rain.gif')";
    }

    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png"
        body.style.backgroundImage = "url('drizzle.jpg')";
    }

    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png"
        body.style.backgroundImage = "url('mist.jpg')";
    }


        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


}



searchBtn.addEventListener("click", ()=> {
    var city = searchBox.value;
    checkWeather(city);
});



searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const city = searchBox.value;
        checkWeather(city);
    }
});