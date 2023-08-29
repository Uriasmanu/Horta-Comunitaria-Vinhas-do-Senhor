
const menuOpen = document.getElementById("menu-open");
const close = document.getElementById("close");
const menuNavbar = document.getElementById("menu-navbar"); 

const screenWidth = window.screen.width;

let checkbox = document.getElementById("menu");
checkbox.addEventListener('click', function () {
    if(checkbox.checked) {
        menuOpen.style.display = "none";
         close.style.display = "block";
         menuNavbar.style.display = "block";
        
         } else {
            menuOpen.style.display = "block";
            close.style.display = "none";
            menuNavbar.style.display = "none";
         }
});



   
    