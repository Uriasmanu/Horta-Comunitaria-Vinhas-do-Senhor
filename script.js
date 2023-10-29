document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imagem-solicita");
    const images = JSON.parse(localStorage.getItem("uploadedImages")) || [];

    if (images.length > 0) {
      images.forEach(function (imageBase64, index) {
        const card = document.createElement("div");
        card.className = "card";

        const imgElement = document.createElement("img");
        imgElement.src = imageBase64;
        imgElement.className = "imagem-solicita";

        const priceElement = document.createElement("span");
        priceElement.className = "price";
        priceElement.textContent = "Solicitação";

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";

        const acceptButton = document.createElement("button");
        acceptButton.textContent = "Aceitar";
        acceptButton.className = "accept-button";
        acceptButton.addEventListener("click", function () {
          const selectionPanel = createSelectionPanel();
          card.appendChild(selectionPanel);
          acceptButton.disabled = true;
          rejectButton.disabled = true;
        });

        const rejectButton = document.createElement("button");
        rejectButton.textContent = "Rejeitar";
        rejectButton.className = "reject-button";
        rejectButton.addEventListener("click", function () {
          images.splice(index, 1);
          localStorage.setItem("uploadedImages", JSON.stringify(images));
          card.remove();
        });

        buttonContainer.appendChild(acceptButton);
        buttonContainer.appendChild(rejectButton);

        card.appendChild(imgElement);
        card.appendChild(priceElement);
        card.appendChild(buttonContainer);
        imageContainer.appendChild(card);
      });
    } else {
      const noImageMessage = document.createElement("p");
      noImageMessage.textContent = "Nenhuma imagem foi encontrada. Envie uma imagem primeiro.";
      imageContainer.appendChild(noImageMessage);
    }
  });

  function createSelectionPanel() {
    const selectionPanel = document.createElement("div");
    selectionPanel.id = "selection-panel";
    selectionPanel.className = "selection-container";
    selectionPanel.innerHTML = `
      <label for="horta-medicinal">
        <input type="radio" id="horta-medicinal" name="selection" value="Horta medicinal">
        Horta medicinal
      </label>
      <label for="projeto-sopao">
        <input type="radio" id="projeto-sopao" name="selection" value="Projeto Sopão">
        Projeto Sopão
      </label>
      <label for="padaria-comunitaria">
        <input type="radio" id="padaria-comunitaria" name="selection" value="Padaria comunitária: Pão da partilha">
        Padaria comunitária: Pão da partilha
      </label>
      <label for="projeto-criancas">
        <input type="radio" id="projeto-criancas" name="selection" value="Projeto com as crianças">
        Projeto com as crianças, Semeando o Futuro
      </label>
      <label for="palestras-conscientizacao">
        <input type="radio" id="palestras-conscientizacao" name="selection" value="Realização de palestras: Conscientização">
        Realização de palestras: Conscientização
      </label>
      <label for="cultivo-hortalicas">
        <input type="radio" id="cultivo-hortalicas" name="selection" value="Cultivo das hortaliças">
        Cultivo das hortaliças
      </label>
      <button type="submit">Confirmar</button>
    `;

    const confirmButton = selectionPanel.querySelector("button");
    confirmButton.addEventListener("click", function () {
        const selectedRadio = selectionPanel.querySelector('input[name="selection"]:checked');
        if (selectedRadio) {
            const selectedOption = selectedRadio.value;

            // Aqui você pode armazenar a imagem e a opção selecionada em algum lugar.
            // Por exemplo, você pode adicionar a imagem e a opção em um objeto e armazená-lo em localStorage.

            const imageObj = {
                imageBase64: imgElement.src,
                selectedOption: selectedOption
            };
            const storedImages = JSON.parse(localStorage.getItem("storedImages")) || [];
            storedImages.push(imageObj);
            localStorage.setItem("storedImages", JSON.stringify(storedImages));

            // Remover o card da imagem
            const imageCard = document.querySelector(".card");
            imageCard.remove();

            // Atualizar a interface do usuário conforme necessário.
        } else {
            // Tratar o caso em que nenhuma opção foi selecionada.
            console.log("Nenhuma opção selecionada");
        }
    });
    return selectionPanel;
  }