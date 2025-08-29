let searchInp = document.querySelector('.weather_search');
let city = document.querySelector('.weather_city');
let day = document.querySelector('.weather_day');
let humidity = document.querySelector('.weather_indicator--humidity>.value');
let wind= document.querySelector('.weather_indicator--wind>.value');
let pressure = document.querySelector('.weather_indicator--pressure>.value');
let image = document.querySelector('.weather_image');
let temperature = document.querySelector('.weather_temperature>.value');

let weatherAPIkey = '00f235484d179d17297c7b85bcf4c173';
let weatherBaseEndpoint ='https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + weatherAPIkey;

let getweatherByCityName = async (city) => {
    let endpoint = weatherBaseEndpoint + '&q=' + city;
    let response = await fetch(endpoint);
    let weather = await response.json();
    return weather;
    // console.log(weather);
}


searchInp.addEventListener('keydown', (e) =>  {
    // console.log("hello");
   if(e.keycode === 13) {
    let weather = getweatherByCityName(searchInp.value);
    updateCurrentWeather(weather);
   }
})

let updateCurrentWeather = (data) => {
    city.textContent = data.name + ',' + data.sys.coutry;
    day.textContent = day0fweek();
}

let day0fweek = (dt = new Date().getTime()) => {
     return new Date(dt).toLocaleDateString('en-EN', {
        'weekday': 'long'
    });
}