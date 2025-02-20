document.getElementById('anamneseForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // URL do Google Forms (substitua pelo seu)
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdIaXhFtelAO52hSWjoB4ApBTZFqEqVXSIE2NHCOcrQHuQfIA/viewform?usp=dialog';

    // Envia os dados para o Google Forms
    fetch(googleFormUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Formulário enviado com sucesso!');
            e.target.reset(); // Limpa o formulário
        } else {
            alert('Erro ao enviar o formulário. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar o formulário.');
    });
});