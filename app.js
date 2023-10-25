document.addEventListener("DOMContentLoaded", function () {
    const imageUploadInput = document.getElementById("image-upload");
    const enviarButton = document.getElementById("enviar-button");
    const visualizarButton = document.getElementById("visualizar-button");
    const imageDisplay = document.getElementById("image-display");

    visualizarButton.addEventListener("click", function () {
        const images = JSON.parse(localStorage.getItem("uploadedImages")) || [];

        if (images.length > 0) {
            imageDisplay.innerHTML = ""; // Limpa o conteúdo do elemento image-display

            const container = document.createElement("div");
            container.classList.add("container-img-update"); // Adiciona a classe "container-img-update"

            images.forEach(function (imageBase64) {
                const imgElement = document.createElement("img");
                imgElement.src = imageBase64;
                imgElement.classList.add("card-img"); // Adiciona a classe "card-img"
                container.appendChild(imgElement);
            });

            imageDisplay.appendChild(container);
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
                const images = JSON.parse(localStorage.getItem("uploadedImages")) || [];

                images.push(imageBase64);
                localStorage.setItem("uploadedImages", JSON.stringify(images));
                alert("Imagem enviada com sucesso e salva no localStorage!");

                imageUploadInput.value = "";
            };

            reader.readAsDataURL(file);
        } else {
            alert("Por favor, selecione uma imagem antes de clicar em enviar.");
        }
    });
});
