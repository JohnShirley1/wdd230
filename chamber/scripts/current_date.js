
/*----------------------------------------------------- Footer Date --------------------------------------------------------------------------*/
let currentdate = document.lastModified;
    document.querySelector(".modified"). textContent = "Last Modified: " + currentdate;
document.querySelector(".currentyear").innerHTML = new Date().getFullYear();

/*------------------------------------------------------- Header Date ------------------------------------------------------------------------- */
const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

/*----------------------------------------------------- Hamburger menu -------------------------------------------------------------------------*/
datefield.innerHTML = `<em>${fulldate}</em>`;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})