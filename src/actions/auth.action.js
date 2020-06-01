import * as types from "../actions/types";
import store from '../store'
import { baseUrl } from "../config";
import Axios from 'axios'



export const login = (loginObj) => {
    return Axios.post(baseUrl+`/auth/login`,loginObj).then(res=>{
        console.log(res)
      let  response = res 
             return  response
         }) 
}

export const sendOPT = (mail) => {
        return Axios.post(baseUrl+`/auth/send_reset_password`,{email:mail}).then(res=>{
          let  response = res['data']
                 return  response
             }).catch(err => {
                 return err
        })
}

export const reset_password = (obj) => {
     return Axios.post(baseUrl+`/auth/reset_password`,obj).then(res=>{
          let  response = res['data']
                 return  response
             }).catch(err => {
                 return err
        })
}

export const registerUser = (obj) => {
  
 
        return Axios.post(baseUrl+`/auth/register`,obj).then(res=>{
            console.log(res)

          let  response = res['data']
                 return  response
             }).catch(err => {
                 console.log(err)
                 return err
        })
}
export const changePassword = (userId,obj) => {
         return Axios.post(baseUrl+`/auth/change_password?user_id=${userId}`,obj).then(res=>{
          let  response = res['data']
                  return  response
             }).catch(err => {
                 return err
        })
}

 
