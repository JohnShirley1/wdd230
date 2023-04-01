
document.querySelector('#submit').addEventListener("click", notify);


function notify() {
    let name = document.querySelector('#name1').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    // let instr = document.querySelector('#instructions').value;
    let today = new Date().toJSON().slice(0, 10);

    if(!localStorage.getItem('counter')) {
        localStorage.setItem('counter', '1')
    } else {
        localStorage.setItem('counter', localStorage.getItem('counter'));
        let counter = Number(localStorage.getItem('counter'));
        localStorage.setItem('counter', ++counter);
        console.log(counter);
    };
    
    document.querySelector('.thanks-box').style.display = "block";
    // document.querySelector('.thanks-box').classList.add('thanks-box2');
    // document.querySelector('.thanks-box2').classList.remove('thanks-box');
   
    document.querySelector('#name2').textContent = name;
    document.querySelector('#email2').textContent = email;
    document.querySelector('#phone2').textContent = phone;
    // document.querySelector('#instr2').textContent = instr;
    document.querySelector('#today2').textContent = today;
    
};


