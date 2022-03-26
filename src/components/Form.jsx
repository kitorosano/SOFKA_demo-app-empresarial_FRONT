import React from 'react';

function Form() {
	return (
		<div className='my-10'>
			<div className='space-y-3'>
				<input
					name='generateMany'
					type='number'
					min='0'
					s
					placeholder='Cantidad a generar:'
					className='inputForm w-full'
				/>
				<input
					name='minuteIntervals'
					type='number'
					min='0'
					max='60'
					placeholder='Intervalo de distancia en minutos:'
					className='inputForm w-full'
				/>
			</div>
			<div className='flex justify-between mt-3'>
				<div className="space-x-3 ">
					<label htmlFor='generateAfter'>Desde:</label>
					<input type='time' id='generateAfter' className='inputForm' />
				</div>
				<div className="space-x-3">
					<label htmlFor='generateBefore'>Hasta</label>
					<input type='time' id='generateBefore' className='inputForm' />
				</div>
			</div>
		</div>
	);
}

export default Form;
