let currentdate = document.lastModified;
    document.querySelector(".modified"). textContent = "Last Modified: " + currentdate;
document.querySelector(".currentyear").innerHTML = new Date().getFullYear();