import {
	RANDOM_ERROR_HIDE,
	RANDOM_ERROR_SHOW,
	RANDOM_RESULTS,
	VIEW_LOADED,
	VIEW_LOADING,
} from '../types';

import clienteAxios from '../config/axios';

export const generarRandoms = (randomBody) => async (dispatch) => {
	dispatch(viewLoading());

	try {
		const respuesta = await clienteAxios.post('', randomBody);
		// console.log(respuesta.data)

		dispatch(randomSetResults(respuesta.data.randomClockList));
	} catch (error) {
		dispatch(randomSetErrorShow(error.response.data));

		setTimeout(() => {
			dispatch(randomSetErrorHide());
		}, 5000);
	} finally {
		dispatch(viewLoaded());
	}
};

const randomSetResults = (results) => ({
	type: RANDOM_RESULTS,
	payload: results,
});
const randomSetErrorShow = (message) => ({
	type: RANDOM_ERROR_SHOW,
	payload: message,
});
const randomSetErrorHide = () => ({
	type: RANDOM_ERROR_HIDE,
});

const viewLoading = () => ({
	type: VIEW_LOADING,
});
const viewLoaded = () => ({
	type: VIEW_LOADED,
});
