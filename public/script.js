function search() {
    const searchTerm = document.getElementById('searchInput').value;

    $.get(`/search?q=${searchTerm}`, (data) => {
        const resultsList = $('#searchResults');
        resultsList.empty();

        data.results.forEach((result) => {
            const listItem = $('<li>').text(result);
            resultsList.append(listItem);
        });
    });
}
