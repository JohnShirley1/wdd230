function notify() {
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let phone = document.querySelector('.phone');
    let instr = document.querySelector('#instructions')
    let today = new Date().toJSON().slice(0, 10);

    document.querySelector('#name1').src = image;
    document.querySelector('#email1').src = image;
    document.querySelector('#phone1').src = image;
    document.querySelector('#instruct1').src = image;
    document.querySelector('#date1').src = image;

};
