import React from 'react'
import Form from '../components/Form';
import Result from '../components/Result';

function App() {
	return (
		<div className='appContainer'>
			<div className="w-1/3">
        <h1 className='text-3xl font-bold underline'>Random Clock Time Generator</h1>
        <Form />
        <Result />
      </div>
		</div>
	);
}

export default App;
