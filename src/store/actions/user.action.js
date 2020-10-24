import * as types from './types';
import { baseUrl, headers } from '../../config';
import Axios from 'axios';
headers.headers.Authorization = localStorage.getItem('Vlis-token')
headers.Authorization = localStorage.getItem('Vlis-token')

 
export const profileRead = () => {
  return function action(dispatch) {
    return Axios.get(baseUrl + '/profiles/read').then(res => {
      let response = res['data']
      return response
    }).catch(err => {
      return catchError(dispatch, err)
    })
  }
};

export const profileCreate = (inputDdata) => {
return function action(dispatch) {
    return Axios.post(baseUrl + '/profiles/create', inputDdata).then(res => {
    let response = res['data']
    return response
    }).catch(err => {
    return catchError(dispatch, err)
    })
}
};
export const profileUpdate = (inputDdata) => {
return function action(dispatch) {
    return Axios.post(baseUrl + '/profiles/update', inputDdata).then(res => {
    let response = res['data']
    return response
    }).catch(err => {
    return catchError(dispatch, err)
    })
}
};
export const profileDelete = (inputDdata) => {
return function action(dispatch) {
    return Axios.post(baseUrl + '/profiles/delete', inputDdata).then(res => {
    let response = res['data']
    return response
    }).catch(err => {
    return catchError(dispatch, err)
    })
}
};

function catchError(dispatch, error) {
  if (error.response) {
    let message = error.response.data
    console.log(error.response, error.response.status);
    error.response.status = error.response.data && error.response.data === "Unauthorized" ? 400 : error.response.status
    return dispatch({ type: types.CATCH_ERROR, payload: { status: error.response.status, message } })
  } else if (error.request) {
    return dispatch({ type: types.CATCH_ERROR, payload: { status: 201, message: error.request } })
  } else {
    console.log('Error', error.message);
    return dispatch({ type: types.CATCH_ERROR, payload: { status: 201, message: error.message } })
  }
}
