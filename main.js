
const menuOpen = document.getElementById("menu-open");
const close = document.getElementById("close");
const menuNavbar = document.getElementById("menu-navbar");

const topo = document.getElementById('bnt-inicio');

topo.onclick = () => {
    document.documentElement.scroll({
        top: 1,
        behavior: "smooth"
    })

    window.onscroll = () => {
        topo.hidden = !(document.documentElement.scrollTop < 200)
    }
}


let checkbox = document.getElementById("menu");
checkbox.addEventListener('click', function () {
    if(checkbox.checked) {
        menuOpen.style.display = "block";
         close.style.display = "none";
         menuNavbar.style.display = "none";
        
         } else {
            menuOpen.style.display = "none";
            close.style.display = "block";
            menuNavbar.style.display = "block";
topo.style.display = "none";
         }
});



   
    