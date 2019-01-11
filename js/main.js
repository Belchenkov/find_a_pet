import fetchJsonp from 'fetch-jsonp';

const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals);

// Fetch Animals From API
function fetchAnimals(e) {
    e.preventDefault();

    // Get User Input
    const animal = document.querySelector('#animal').value;
    const zip = document.querySelector('#zip').value;

    // Fetch Pets
    fetchJsonp(`http://api.petfinder.com/pet.find?format=json&key=12b43680049896e7810f869b532875cf&animal=${animal}&location=${zip}&callback=callback`, {
        jsonpCallbackFunction: 'callback'
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

// JSON Callback
function callback(data) {
    console.log(data);
}