import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Result() {
	const result = useSelector((state) => state.random.result);
	const error = useSelector((state) => state.random.error);

	const dispatch = useDispatch();
	return (
		<div className='px-4 py-3 mt-1 border-2 border-dashed border-gray-200 rounded-lg'>
			{error ? <div className='errorAlert'>{error}</div> : null}
		</div>
	);
}

export default Result;
