document.addEventListener("DOMContentLoaded", function () {
    const uploadedImage = document.getElementById("uploaded-image");

    const imageBase64 = localStorage.getItem("uploadedImage");

    if (imageBase64) {
        uploadedImage.src = imageBase64;
    } else {
        uploadedImage.style.display = "none";
        const noImageMessage = document.createElement("p");
        noImageMessage.textContent = "Nenhuma imagem foi encontrada. Envie uma imagem primeiro.";
        document.getElementById("image-display").appendChild(noImageMessage);
    }
});
