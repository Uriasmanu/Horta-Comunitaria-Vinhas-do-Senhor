const submenu = document.querySelector(".itens")
const menu = document.getElementById('navbar')

menu.addEventListener("click", function () {
    if (submenu) {
        // Alternar o estado do menu suspenso
        if (submenu.style.display === 'flex') {
          submenu.style.display = 'none';
        } else {
          submenu.style.display = 'flex';
        }
      }

})

 

