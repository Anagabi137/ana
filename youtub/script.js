document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');

    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('hidden');
    });

    // Basic search functionality (placeholder)
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');

    searchBtn.addEventListener('click', function() {
        const query = searchInput.value;
        if (query) {
            alert('Buscando por: ' + query);
        }
    });
});
