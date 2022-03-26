import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { generarRandoms } from '../actions';

function Form() {
	const loading = useSelector((state) => state.view.loading);
	const dispatch = useDispatch();

	const generateManyRef = useRef(null);
	const minuteIntervalsRef = useRef(null);
	const generateAfterRef = useRef(null);
	const generateBeforeRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const generateMany = generateManyRef.current.value;
		const minuteIntervals = minuteIntervalsRef.current.value;
		const generateAfter = generateAfterRef.current.value;
		const generateBefore = generateBeforeRef.current.value;

		// console.log(generateMany, minuteIntervals, generateAfter, generateBefore);
		if (!(generateMany && minuteIntervals && generateAfter && generateBefore))
			return;

		dispatch(
			generarRandoms({
				generateMany,
				minuteIntervals,
				generateAfter,
				generateBefore,
			})
		);
	};

	return (
		<form onSubmit={handleSubmit} className='my-10'>
			<div className='space-y-3'>
				<input
					name='generateMany'
					type='number'
					min='0'
					ref={generateManyRef}
					placeholder='Cantidad a generar:'
					className='inputForm w-full'
				/>
				<input
					name='minuteIntervals'
					type='number'
					min='0'
					max='60'
					ref={minuteIntervalsRef}
					placeholder='Intervalo de distancia en minutos:'
					className='inputForm w-full'
				/>
			</div>
			<div className='flex justify-between mt-3'>
				<div className='space-x-3 '>
					<label htmlFor='generateAfter'>Desde:</label>
					<input
						type='time'
						id='generateAfter'
						ref={generateAfterRef}
						className='inputForm'
					/>
				</div>
				<div className='space-x-3'>
					<label htmlFor='generateBefore'>Hasta</label>
					<input
						type='time'
						id='generateBefore'
						ref={generateBeforeRef}
						className='inputForm'
					/>
				</div>
			</div>
			<input type='submit' className='submitBtn' value='Generar' />
		</form>
	);
}

export default Form;
