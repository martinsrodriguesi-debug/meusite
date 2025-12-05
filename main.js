document.addEventListener('DOMContentLoaded', function() {
    // Redireciona o index.html para a página inicial estática
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        window.location.replace('home.html');
    }
});
