import React from 'react';
import Movie from './Movie';
import { v4 as uuidv4 } from 'uuid';


function MovieList(props) {

	const{ movies } = props
	console.log(movies)
	
	return(
	 <div>
		<div className="row col-12">
			{movies.map(movie =>(
				<Movie key={uuidv4()} title={movie.Title} year={movie.Year} poster={movie.Poster} type={movie.Type} />
			))}
		</div>
	  </div>
	)

}


export default MovieList;
