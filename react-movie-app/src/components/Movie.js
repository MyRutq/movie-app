import React from 'react';

function Movie(props) {
	return (
        <div className="col-3 mb-5 text-center movie">
            <img src={props.poster} alt="poster"></img>
            <h4 className="mt-3 mb-3">{props.title}</h4>
            <p>Year: {props.year}</p>
            <p>Type: {props.type}</p>
        </div>
	);
};

export default Movie;