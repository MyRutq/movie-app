import React from 'react';

const Form = (props) => {
	return (
		<div className='col-12 mb-4 row'>
			<input
				className='form-control col-10'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
			<select className='form-control col-2' value={props.value}
				onChange={(event) => props.setType(event.target.value)}>
				<option value="all">All</option>
				<option value="movie">Movie</option>
				<option value="series">Series</option>
				<option value="episode">Episode</option>
			</select>
		</div>
	);
};

export default Form;
