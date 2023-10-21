document.addEventListener("DOMContentLoaded", function () {
    const imageUploadInput = document.getElementById("image-upload");
    const enviarButton = document.getElementById("enviar-button");
    const visualizarButton = document.getElementById("visualizar-button");

    visualizarButton.addEventListener("click", function () {
        const imageBase64 = localStorage.getItem("uploadedImage");

        if (imageBase64) {
            const imgElement = document.createElement("img");
            imgElement.src = imageBase64;

            // Aplicar a classe diretamente ao elemento <img>
            imgElement.classList.add("imagem-display");

            const imageDisplay = document.getElementById("image-display");
            imageDisplay.innerHTML = ""; // Limpa o conteúdo do elemento image-display
            imageDisplay.appendChild(imgElement);
        } else {
            alert("Nenhuma imagem foi encontrada. Envie uma imagem primeiro.");
        }
    });

    enviarButton.addEventListener("click", function () {
        const file = imageUploadInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imageBase64 = e.target.result;

                localStorage.setItem("uploadedImage", imageBase64);
                alert("Imagem enviada com sucesso e salva no localStorage!");

                // Limpe apenas o elemento 'img' dentro de 'image-display'
                const imageDisplay = document.getElementById("image-display");
                const imgElement = imageDisplay.querySelector("img");
                if (imgElement) {
                    imageDisplay.removeChild(imgElement);
                }

                imageUploadInput.value = "";
            };

            reader.readAsDataURL(file);
        } else {
            alert("Por favor, selecione uma imagem antes de clicar em enviar.");
        }
    });
});
