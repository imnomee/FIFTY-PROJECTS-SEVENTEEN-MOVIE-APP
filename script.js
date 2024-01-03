const API_URL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d452866cc6d397ecb7aa2ea90e459621&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?&api_key=d452866cc6d397ecb7aa2ea90e459621&query="';

const form = document.getElementById('form');
const input = document.getElementById('search');
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
}

getMovies(API_URL);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
});
