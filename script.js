function mostraTesto() {
    var inputElement = document.getElementById('inputText');
    var testoInserito = inputElement.value;
    console.log(testoInserito)
    popolaDiv(testoInserito);
}

function popolaDiv(testoInserito) {
    const apiKey = 'Q0RELKjBvdtJSZKwAju4wfiGZ3ZqEVDeIHxhqsbsJcbvRulK5ThtkPtk';
    const endpoint = 'https://api.pexels.com/v1/search';
    const query = testoInserito;
    const perPage =21;

    fetch(`${endpoint}?query=${query}&per_page=${perPage}`, {
        headers: {
            'Authorization': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            const myDiv = document.getElementById('box');
            myDiv.innerHTML = '';

            data.photos.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.src.original;
                myDiv.appendChild(img);
            });
        })
        .catch(error => alert(error));
}
function svuotaDiv() {
    document.getElementById('box').innerHTML = '';
 testoInserito.value.innerHTML="";
}
