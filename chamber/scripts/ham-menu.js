const nav1 = document.querySelector('.navigation');
nav1.addEventListener('click', ()=>
{nav1.classList.toggle('shown')});


const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})