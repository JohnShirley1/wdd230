function notify() {
    document.querySelector('.thanks-box').getElementsByClassName.display = "block"

    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let phone = document.querySelector('.phone');
    let instr = document.querySelector('#instructions')
    let today = new Date().toJSON().slice(0, 10);
    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(instr)
    console.log(today)
    document.querySelector('#name1') = name;
    document.querySelector('#email1') = email;
    document.querySelector('#phone1') = phone;
    document.querySelector('#instruct1') = instr;
    document.querySelector('#date1') = today;
    
};
