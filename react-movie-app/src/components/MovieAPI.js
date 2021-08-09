import React, { useState, useEffect } from 'react';
import Form from './Form';
import MovieList from './MovieList';


const MovieAPI = () => {
    const [movies, setMovies] = useState([])
	const [searchValue, setSearchValue] = useState('')
    const [type, setType] = useState('')
    const [error, setError] = useState()

	const getMovie = async (searchValue) => {
            setError(null);
            const url = `http://www.omdbapi.com/?s=${searchValue}&type=${type}&apikey=3556b953`;
            const response = await fetch(url);
            const data = await response.json();

            data.Search
                ? setMovies(data.Search)
                :  setError(data.Error);
    
	};


    useEffect(() => {
        searchValue !== ''
        ? getMovie(searchValue, type)
        : setSearchValue('batman')
    }, [searchValue, type])

	return (
		<div className='container container-fluid movie-app'>
			<div className='row mt-4 mb-4'>
				<Form searchValue={searchValue} setSearchValue={setSearchValue} type={type} setType={setType} />
			</div>

            {error ? ( <p style={{color: `red`}}> {error} </p>) : ( <MovieList movies={movies} /> )}

		</div>
	);
};


export default MovieAPI;