function searchWeather(){
    var cityName = document.getElementById("search-city").value
    console.log(cityName);

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid=703f2c77429f4f6d784fba7d5d6c8675')
.then(res => {
       return res.json();
})
.then(data =>{

    var weatherCondition = "Description : " +data.weather[0].description
    document.getElementById("description").innerHTML = weatherCondition
  
    var cityTemperature = data.main.temp+"°C"
    document.getElementById("city-temp").innerHTML = cityTemperature

    var humidity = "Humidity : "+data.main.humidity
    document.getElementById("humidity").innerHTML = humidity

    var wind =   "Wind speed : "+data.wind.speed+" Km/h"
    document.getElementById("wind-speed").innerHTML = wind

    var cite = data.name
    document.getElementById("cite").innerHTML = cite

})




}
