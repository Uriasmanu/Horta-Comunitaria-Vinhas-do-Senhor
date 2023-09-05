
const menuOpen = document.getElementById("menu-open");
const close = document.getElementById("close");
const menuNavbar = document.getElementById("menu-navbar");

const topo = document.getElementById('bnt-inicio');

topo.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition + windowHeight >= documentHeight) {
        topo.style.display = "flex"; // Mostrar o botão quando estiver no final da página
    } else {
        topo.style.display = "none"; // Ocultar o botão em outros lugares
    }
});




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
         }
});



   
    