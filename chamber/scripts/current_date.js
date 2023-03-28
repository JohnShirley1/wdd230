
/*----------------------------------------------------- Footer Date --------------------------------------------------------------------------*/
// let currentdate = document.lastModified;
//     document.querySelector(".modified"). textContent = "Last Modified: " + currentdate;
// document.querySelector(".currentyear").innerHTML = new Date().getFullYear();

/*------------------------------------------------------- Header Date ------------------------------------------------------------------------- */
const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

/*----------------------------------------------------- Date specific ------------------------------------------------------------------------- */


let currentdate = document.lastModified;
      document.querySelector(".modified").textContent =
        "Last Updated: " + currentdate;
document.querySelector(".currentyear").innerHTML = new Date().getFullYear();

if (d.getDay() == 1 || d.getDate() == 2) {
  document.querySelector(".meeting").style.display = "grid";
}else {
    document.querySelector(".meeting").style.display = "none"
};

/*----------------------------------------------------- Hamburger menu -------------------------------------------------------------------------*/



/*------------------------------------------------------ weather API call -------------------------------------------------------------- */

const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/carlsbad?unitGroup=metric&key=9V2RKJSJVEG7V7TE3NY9QTE38&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('#temp').textContent = t;
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('#humid').textContent = data.currentConditions.humidity;
    document.querySelector('#condition').textContent =  data.currentConditions.conditions;
    document.querySelector('#weathericon').src = image;
    document.querySelector('#weathericon').alt= data.currentConditions.conditions + ' icon';

/*-------------------------------------------------------Wind Chill Calculation---------------------------------------------------------------*/

    let notapplicapble = " N/A"
    let temp = parseFloat(document.getElementById('temp').textContent);
    let windspeed = parseFloat(document.getElementById('speed').textContent);
    let windchill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

    if (temp <= 50.00 && windspeed >= 3.00) {
      document.getElementById('chill').innerHTML = " " + windchill + "&#176;F";
    }
    else{
      document.getElementById('chill').innerHTML = notapplicapble;
    };
};
getWeather();

/*------------------------------------------------------Storage local ------------------------------------------------------------------------*/

if (!localStorage.getItem('lastvist')) {
  localStorage.getItem('lastvisit', date.now())
};