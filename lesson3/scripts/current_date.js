let currentdate = document.lastModified;
    document.querySelector(".modified"). textContent = "Last Updated: " + currentdate;
document.querySelector(".currentyear").innerHTML = new Date().getFullYear();
