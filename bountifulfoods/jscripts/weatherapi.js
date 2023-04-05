document.querySelector('#smoo-count').textContent = localStorage.getItem('counter');


const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/carlsbad?unitGroup=us&key=9V2RKJSJVEG7V7TE3NY9QTE38&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('.temp').textContent = t;
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('.humid').textContent = data.currentConditions.humidity;
    document.querySelector('.condition').textContent =  data.currentConditions.conditions;
    document.querySelector('.weathericon').src = image;
    document.querySelector('.weathericon').alt= data.currentConditions.conditions + ' icon';
    document.querySelector('#day1').textContent = data.days[0].datetime;

    // let day2 = data.currentConditions.datetimeEpoch;
    let t2 = data.days[1].temp;
    document.querySelector('.temp2').textContent = t2;
    let image2 = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.days[1].icon}.svg`;
    document.querySelector('.humid2').textContent = data.days[1].humidity;
    document.querySelector('.condition2').textContent =  data.days[1].conditions;
    document.querySelector('.weathericon2').src = image2;
    document.querySelector('.weathericon2').alt= data.days[1].conditions + ' icon';
    document.querySelector('#day2').textContent = data.days[1].datetime;

    // let day3 = data.currentConditions.datetimeEpoch;
    let t3 = data.days[2].temp;
    document.querySelector('.temp3').textContent = t3;
    let image3 = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.days[2].icon}.svg`;
    document.querySelector('.humid3').textContent = data.days[2].humidity;
    document.querySelector('.condition3').textContent =  data.days[2].conditions;
    document.querySelector('.weathericon3').src = image3;
    document.querySelector('.weathericon3').alt= data.days[2].conditions + ' icon';
    document.querySelector('#day3').textContent = data.days[2].datetime;
    
};
getWeather();