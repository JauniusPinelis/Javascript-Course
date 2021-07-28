//$("p").text("Jquery works");

// http://api.weatherstack.com/current?access_key=5f2ead5da399c3df6978d68381f55e0f&query=Vilnius

let weatherApiUrl = "http://api.weatherstack.com/current";
let apiKey = "5f2ead5da399c3df6978d68381f55e0f";

$(document).ready(function() {
    $("form input[type='button']").click(() => {
        let cityName = $("#city-name").val();
        let url = `${weatherApiUrl}?access_key=${apiKey}&query=${cityName}`;
        $.getJSON(url, (data) => {
            console.log(data);
            let temperature = data.current.temperature;
            let weatherDescription = data.current.weather_descriptions[0];
            let weatherIcon = data.current.weather_icons[0];

            $("#temperature").text(temperature);
            $("#descriptions").text(weatherDescription);
            $("#weather-info img").attr("src", weatherIcon);
        })
    })
});