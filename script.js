document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imagem-solicita");
    const images = JSON.parse(localStorage.getItem("uploadedImages")) || [];

    if (images.length > 0) {
        images.forEach(function (imageBase64) {
            const card = document.createElement("div");
            card.className = "card";

            const imgElement = document.createElement("img");
            imgElement.src = imageBase64;
            imgElement.className = "imagem-solicita";

            const priceElement = document.createElement("span");
            priceElement.className = "price";
            priceElement.textContent = "Solicitação";

            card.appendChild(imgElement);
            card.appendChild(priceElement);
            imageContainer.appendChild(card);
        });
    } else {
        const noImageMessage = document.createElement("p");
        noImageMessage.textContent = "Nenhuma imagem foi encontrada. Envie uma imagem primeiro.";
        imageContainer.appendChild(noImageMessage);
    }
});
