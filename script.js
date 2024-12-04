function search(event) {
    event.preventDefault();
    const query = document.getElementById('searchBar').value.toLowerCase();
    const items = document.querySelectorAll('.search-item');
    items.forEach((item) => {
        if (item.textContent.toLowerCase().includes(query)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}
