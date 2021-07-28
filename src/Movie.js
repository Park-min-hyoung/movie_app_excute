import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';

function Movie({ year, title, summary, poster }) {
    return (
        <div class="movies__movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie_data">
                <h3 class="movie__title">{title}</h3>
                <h3 class="movie__year">{year}</h3>
                <p class="movie_summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.prototype = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}

export default Movie;