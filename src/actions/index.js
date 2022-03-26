import { RANDOM_ERROR_HIDE, RANDOM_ERROR_SHOW, RANDOM_RESULTS, VIEW_LOADED, VIEW_LOADING } from '../types';

import clienteAxios from '../config/axios';

export const generarRandoms = (randomBody) => async (dispatch) =>{
  dispatch({ type: VIEW_LOADING });

  try {
    const respuesta = await clienteAxios.post('', randomBody);
    // console.log(respuesta.data)

    dispatch({ type: RANDOM_RESULTS, payload: respuesta.data.randomClockList });
    dispatch({ type: VIEW_LOADED });
  } catch (error) {
    dispatch({type: RANDOM_ERROR_SHOW, payload: error.response.data});
    
    setTimeout(() => {
      dispatch({ type: RANDOM_ERROR_HIDE })
    }, 5000);
  }
}
