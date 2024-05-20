let ville = "Paris";

meteoAPI(ville)

function date(){
    var d = new Date();
    var date = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var fullDate = date+' à '+hours;
    dateNow.innerHTML = fullDate
}

setInterval(() => {
    date()
}, 50);

function meteoAPI(ville) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // console.log(this.responseText);
        weatherData = JSON.parse(this.responseText);
        // Affichage des données météorologiques
        temperature.innerHTML = weatherData.temperatures + "°C";
        villeMeteo.innerHTML = weatherData.ville;
        temperatureMin.innerHTML = weatherData.min + "°C";
        temperatureMax.innerHTML = weatherData.max + "°C";
        humiditer.innerHTML = weatherData.hum + "%";
        descriptionTemps.innerHTML = weatherData.des
        logoTemp.src = 'https://openweathermap.org/img/wn/'+weatherData.logo+'@2x.png'
        vent.innerHTML = weatherData.speed + "Km/h"
        arrow.style.transform = "rotate("+weatherData.degrer+"deg)"
      }
    };

    xhr.open("GET", `php/meteo.php?ville=${ville}`, true);
    xhr.send();
}

close_meteo.addEventListener("click", function(event) {
    hide(meteo)
    show(bureau_titre)

});

console.log('meteo chargé')