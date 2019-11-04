import types from "./types";
import {baseUrl,headers} from "../config";
import Axios from 'axios'

export const login = (loginObj:object) => {
    return function action(dispatch:any) {
     return Axios.post(baseUrl + `/user/login/`,loginObj,headers).then(res=>{
          let  response = res['data']['data']
          console.log(response)
              if (res.status === 200) {
                return  dispatch( {type: types.LOGIN_SUCCESS,payload:response} )
               }else{
                return dispatch( {type:types.ERROR,payload:response})
               }      
             }).catch(err => {
              return catchError(dispatch,err)
        })
      }
  }

  function catchError(dispatch:any,error:any){
    if (error.response) {
     console.log(error.response,error.response.status);
     error.response.status =error.response.data&&error.response.data==="Unauthorized"?400:error.response.status
       return dispatch({type:types.ERROR, payload:{status:error.response.status,message:error.response.data}})
    } else if (error.request) {
        return dispatch({type:types.ERROR, payload:{status:201,message:error.request}})
   } else {
       console.log('Error', error.message);
       return dispatch({type:types.ERROR, payload:{status:201,message:error.message}})
   }
}
  