const API_URL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d452866cc6d397ecb7aa2ea90e459621&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?&api_key=d452866cc6d397ecb7aa2ea90e459621&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const input = document.getElementById('search');

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    showMovies(data.results);
}

getMovies(API_URL);

function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach((movie) => {
        const { title, poster_path, release_date, vote_average, overview } =
            movie;
        const date = release_date.trim().split('-')[0];
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `<img src="${IMG_PATH + poster_path}" alt="${
            title + '_img'
        }" />
                <div class="movie-info">
                    <h3>${title} - <span>${date}</h3>
                    <span class="${getRating(
                        vote_average
                    )}">${Number.parseFloat(vote_average).toFixed(1)}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    <p>
                        ${overview}
                    </p>
            </div>`;
        console.log(movieEl);
        main.appendChild(movieEl);
    });
}
function getRating(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

// getMovies(API_URL);

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
