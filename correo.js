document.addEventListener('DOMContentLoaded', function() {
    const image = localStorage.getItem('image');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    if (image && name && email) {
        document.getElementById('image').src = image;
        document.getElementById('name').textContent = name;
        document.getElementById('email').textContent = email;
    } else {
        window.location.href = "index.html";
    }

    document.getElementById('goToReset').addEventListener('click', function() {
        const data = {
            image: image,
            name: name,
            email: email,
            message: 'Este es un mensaje de prueba',
            extraField: 'valorExtra'
        }
        window.location.href = "return.html";
    });
});

fetch('https://formspree.io/f/xgvwkzbl', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.catch(error => {
    console.error('Error:', error);
    alert('Hubo un problema al enviar los datos');
});
