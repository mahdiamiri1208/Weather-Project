let $ = document
let backgroundImg = [
    '../assest/img/pexels-francesco-ungaro-2325447.jpg',
    '../assest/img/pexels-minan1398-906150.jpg',
    '../assest/img/pexels-pixabay-147411.jpg',
    '../assest/img/pexels-pixabay-158063.jpg',
    '../assest/img/pexels-pixabay-247599.jpg',
    '../assest/img/pexels-pixabay-46160.jpg'
]
let citiesWeather = {
    tehran : {city: 'Tehran', temp: 12, weather: 'Sunny', humidity: 23, windSpeed: 10},
    rasht : {city: 'Rasht', temp: 10, weather: 'Cloudy', humidity: 19, windSpeed: 15},
    qazvin : {city: 'Qazvin', temp: 8, weather: 'Cloudy', humidity: 12, windSpeed: 28},
    kashan : {city: 'Kashan', temp: 15, weather: 'Sunny', humidity: 25, windSpeed: 16}
}
let btnSearch = $.getElementById('btn-search')
let searchInput = $.querySelector('.search-bar')
let city = $.querySelector('.city')
let temp = $.querySelector('.temp')
let description = $.querySelector('.description')
let humidity = $.querySelector('.humidity')
let wind = $.querySelector('.wind')
let loading = $.querySelector('.weather')

btnSearch.addEventListener('click', function(){
    let searchValue = searchInput.value.trim().toLowerCase()
    let mainCity = citiesWeather[searchValue]
    if(mainCity){
        loadDataWeather(mainCity)
    }
    else{
        alert("Enter the desired city correctly.")
    }
})

function loadDataWeather(cityData){
    city.innerHTML = 'Weather in ' + cityData.city
    temp.innerHTML = cityData.temp + '°C'
    description.innerHTML = cityData.weather
    humidity.innerHTML = 'Humidity: ' + cityData.humidity + '%'
    wind.innerHTML = 'Wind speed: ' + cityData.windSpeed + ' km/h'
    loading.classList.remove('loading')
}
let randomImg = backgroundImg[Math.floor(Math.random() * backgroundImg.length)]
document.body.style.backgroundImage  = 'url(' + randomImg + ')'

