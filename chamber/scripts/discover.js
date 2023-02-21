const date = Date.now()

if(!localStorage.getItem('lastLogin')) {
    populateStorage();
} else {
    loginTime();
}

function populateStorage() {
    localStorage.setItem('lastLogin', date);

    loginTime();
}

function loginTime() {
    let lastLogin = localStorage.getItem('lastLogin');
    let daysPassed = (parseFloat(date) - parseFloat(lastLogin)) / 1000 / 60 / 60 / 24;
    let displayTime = Math.round(daysPassed);
    document.getElementById('day1').innerHTML = "It has been " + displayTime + " days since your last visit!";
    localStorage.setItem('lastLogin', date);
};

// const images = document.querySelectorAll('[data-src]');
// const options = {threshold: [0.5]};

// function preloadImage(img) {
//     const source = img.getAttribute('data-src');
//     if(!source){
//         return;
//     }
//     img.src = source;
// }

// const io = new IntersectionObserver(
//     (entries, io) => {
//         entries.forEach(entry => {
//             if(entry.isIntersecting){
//                 preloadImage(entry.target); //call a function send in the image that is currently intersecting
//                 io.unobserve(entry.target); //stop observing the image
//             } else {
//                 return;
//             }
//             //console.log(entries);
//         });
//     },
//     options
// );

images.forEach(images =>{
    io.observe(images);
});

const images = document.querySelectorAll('[data-src]');
   
const options =  {threshold: .5};

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }
    img.src = source;
}

const io = new IntersectionObserver (
    (entries)=> {
        entries.forEach(entry=> {
            if(!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
            console.log(entries);
        })
        
        
    },
    options
);

images.forEach (img => {
    io.observe(img);
})

