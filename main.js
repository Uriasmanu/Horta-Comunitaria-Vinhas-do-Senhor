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

    // Verifique as credenciais hardcoded do admin
    if (email === "seu_email@exemplo.com" && password === "sua_senha") {
        window.location.href = "login.html";
        return false; // Impedir que o formulário seja enviado
    } else {
        // Se não for o admin, verifique as credenciais no localStorage
        var storedEmail = localStorage.getItem('email');
        var storedPassword = localStorage.getItem('password');

        if (email === storedEmail && password === storedPassword) {
            window.location.href = "usuario.html";
            return false; // Impedir que o formulário seja enviado
        } else {
            alert("Acesso negado. Credenciais incorretas.");
            return false; // Impedir que o formulário seja enviado
        }
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

// Função para criar uma conta
function createUser() {
    // Obter os valores dos campos de email e senha
    var email = document.getElementById('user-email-create').value;
    var password = document.getElementById('user-password-create').value;
    var confirmPassword = document.getElementById('user-confirm-password').value;
  
    // Verificar se os campos não estão vazios e se as senhas são iguais
    if (email && password && confirmPassword && password === confirmPassword) {
      // Armazenar os valores no localStorage
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
  
      // Limpar os campos após o armazenamento
      document.getElementById('user-email-create').value = '';
      document.getElementById('user-password-create').value = '';
      document.getElementById('user-confirm-password').value = '';
  
      // Redirecionar para a página "usuario.html"
      window.location.href = 'usuario.html';
  
      // Retornar false para evitar o envio padrão do formulário
      return false;
    } else {
      // Caso algum campo esteja vazio ou as senhas não sejam iguais, exibir uma mensagem de erro ou alerta
      alert('Por favor, preencha todos os campos e certifique-se de que as senhas são iguais.');
      return false;
    }
  }

// main.js

document.addEventListener("DOMContentLoaded", function () {
    const imageUploadInput = document.getElementById("image-upload");
    const enviarButton = document.getElementById("enviar-button");

    enviarButton.addEventListener("click", function () {
        const file = imageUploadInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imageBase64 = e.target.result;

                // Salve a imagem no localStorage
                localStorage.setItem("uploadedImage", imageBase64);

                // Opcionalmente, você pode exibir uma mensagem de sucesso
                alert("Imagem enviada com sucesso e salva no localStorage!");

                // Limpe o input do arquivo
                imageUploadInput.value = "";
            };

            reader.readAsDataURL(file);
        } else {
            alert("Por favor, selecione uma imagem antes de clicar em enviar.");
        }
    });
});

  
  