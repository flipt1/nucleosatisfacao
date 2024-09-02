document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('satisfacaoForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const rating = document.querySelector('input[name="rating"]:checked');
        const comentario = document.getElementById('comentario').value;

        if (!rating) {
            alert('Por favor, selecione uma avaliação antes de enviar.');
            return;
        }

        // Aqui você enviaria os dados para seu servidor
        console.log('Avaliação:', rating.value);
        console.log('Comentário:', comentario);

        // Redirecionar para a página do Google para deixar uma avaliação
        const googleReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJDfu07pOzGgcRcmkNp8cIiiY';
        
        alert('Obrigado pela sua avaliação! Você será redirecionado para deixar uma avaliação no Google.');
        window.open(googleReviewUrl, '_blank');

        // Limpar o formulário
        form.reset();
    });
});
