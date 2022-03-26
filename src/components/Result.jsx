import React from 'react';
import { useSelector } from 'react-redux';

function Result() {
	const results = useSelector((state) => state.random.results);
	const error = useSelector((state) => state.random.error);
	const loading = useSelector((state) => state.view.loading);

	return (
		<div className='px-4 py-3 mt-1 border-2 border-dashed border-gray-300 rounded-lg '>
			{!loading && error && <div className='errorAlert'>{error}</div>}
      
      <ul className="flex flex-col flex-wrap h-[15rem] ">
      {!loading && results && results.map(randomTime => 
        <li className="flex-1 " key={randomTime}> {"▪ "}{randomTime}</li>
      )}
      </ul>
		</div>
	);
}

export default Result;
