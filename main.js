const menuOpen = document.getElementById("menu-open");
const close = document.getElementById("close");
const menuNavbar = document.getElementById("menu-navbar");
const parceiros = document.getElementById("parceiros");
const checkbox = document.getElementById("menu");


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
checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
        menuOpen.style.display = "block";
        close.style.display = "none";
        menuNavbar.style.display = "none";
    } else {
        menuOpen.style.display = "none";
        close.style.display = "block";
        menuNavbar.style.display = "block";
    }
});

parceiros.onclick = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

const imageContainer = document.querySelector('.containerimagens');

imageContainer.addEventListener('click', function () {
    
    /* ContainerMaster
     &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('sua-imagem-de-fundo.jpg');
        backdrop-filter: blur(10px);
        z-index: 1;
         */
        
    /*Containerimagens
    position: fixed;
    transform: scale(2.1);
    left: 34%;
    top: 33%;
    z-index: 3;
    */


});

function showCreateAccountForm() {
    document.getElementById("card").style.display = "none";
    document.getElementById("card-criar-conta").style.display = "block";
}

function showLoginForm() {
    document.getElementById("card").style.display = "block";
    document.getElementById("card-criar-conta").style.display = "none";
}

function loginUser() {
    var email = document.getElementById("user-email").value;
    var password = document.getElementById("user-password").value;

    // Verificar se o login e senha estão corretos (substitua esta verificação com seu sistema de autenticação)
    if (email === "seu_email@exemplo.com" && password === "sua_senha") {
        // Redirecionar para a página de login
        window.location.href = "login.html";
        return false; // Impedir que o formulário seja enviado
    } else {
        alert("Acesso negado. Verifique suas credenciais.");
        return false; // Impedir que o formulário seja enviado
    }
}

 // Função para aprovar uma solicitação
 function aprovarSolicitacao(id) {
    // Implemente a lógica de aprovação aqui
    alert(`Solicitação ${id} aprovada com sucesso.`);
}

// Função para rejeitar uma solicitação
function rejeitarSolicitacao(id) {
    // Implemente a lógica de rejeição aqui
    alert(`Solicitação ${id} rejeitada.`);
}

