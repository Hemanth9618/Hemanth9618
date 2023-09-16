document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');
    const resultDiv = document.querySelector('.result');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const image = document.getElementById('image').value;
        const video = document.getElementById('video').value;

        // Create a new blog post element
        const postDiv = document.createElement('div');
        postDiv.className = 'blog-post';
        postDiv.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
            ${image ? `<img src="${image}" alt="${title}" />` : ''}
            ${video ? `<iframe width="560" height="315" src="${video}" frameborder="0" allowfullscreen></iframe>` : ''}
        `;

        // Append the new blog post to the result section
        resultDiv.appendChild(postDiv);

        // Clear form inputs
        form.reset();
    });
});