
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
const nav = document.querySelector('.navigation');
nav.addEventListener('click', ()=>
{nav.classList.toggle('shown')});

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let weekday = weekdays[d.getDay()];
let month = months[d.getMonth()];
let day = d.getDate();
let year =d.getFullYear();
document.getElementById("day").innerHTML = "Utica Chamber of Commerce | " + weekday + ", " + day + " " + month + " " + year;



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
datefield.innerHTML = `<em>${fulldate}</em>`;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})