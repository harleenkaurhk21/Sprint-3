const API_KEY = "7880058b1fc5f415f144d2f5ebd91ac0";
async function getWeather(){
    let city = document.getElementById("city").value;
    try{
        let url = 
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        if(!response.ok){
            throw new Error("City not found");
        }
        document.getElementById("cityName").innerHTML =
        data.name;
        document.getElementById("temperature").innerHTML =
        Math.round(data.main.temp)+" °C";
        document.getElementById("condition").innerHTML =
        data.weather[0].description;
        document.getElementById("humidity").innerHTML =
        "Humidity: "+data.main.humidity+"%";
        document.getElementById("icon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
    catch(error){
        document.getElementById("cityName").innerHTML =
        error.message;
    }
}
