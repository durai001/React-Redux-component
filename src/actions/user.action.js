import * as types from "../actions/types";
import store from '../store'
import { baseUrl,headers } from "../config";
import Axios from 'axios'
import { error } from "util";
let auth={headers: {Authorization:"JWT "+ localStorage.getItem("app-token")}}
// Axios.interceptors.response.use(response => {
//      return response;
//  }, error => {
//      console.log(error.response)
//    if (error.response.status === 401) {
//     //  store.dispatch({type:types.UNAUTHORIZED,payload:"Unautharized"})
//     }
//    return error;
//  });

export const exportPatient = (obj) => {
 
    return Axios.post(baseUrl+`/user/exportPatients`,obj,headers).then(res=>{
        console.log(res)
      let  response = res['data']
             return  response
         }).catch(err => {
             console.log(err)
             returnCatchError(err)
             return err
    })
}



export const createPatientViaCSV = (obj) => {
 
    return Axios.post(baseUrl+`/user/createUserwithCSV`,obj,headers).then(res=>{
        console.log(res)
      let  response = res['data']
             return  response
         }).catch(err => {
             console.log(err)
             returnCatchError(err)
             return err
    })
}
export const getAllAllergy = (id) => {
    console.log(headers)
    
    return Axios.get(baseUrl+`/allergyDetail/getAll?patient_id=${id}`,headers).then(res=>{
       let  response = res['data']
              return  response
          }).catch(err => {
              return err
     })                                                                             
}
export const updateProfile = (userObj) => {
     
    return Axios.put(baseUrl+`/user/updateProfile`,userObj,headers).then(res=>{
       let  response = res['data']
              return  response
          }).catch(err => {
              return err
     })
}
export const addPatientAllergy = (obj) => {
    
    return Axios.post(baseUrl+`/PatientAllergyDetail/create`,obj,headers).then(res=>{
               return  res
          }).catch(error => {
                if (error.response) {
                    return {status: error.response.status,message:error.response.data.message}
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
     })
}

export const createAllergy = (obj) => {
    
    return Axios.post(baseUrl+`/allergyDetail/create`,obj,headers).then(res=>{
       let  response = res['data']
              return  response
          }).catch(err => {
            console.log(err)
            //   return err
     })
}
 
export const updateUserProfile = (id,base64) => {
 
  return Axios.put(baseUrl+`/user/updateProfileImg/${id}`,base64,headers).then(res=>{
     let  response = res['data']
            return  response
        }).catch(err => {
            return err
   })
}
export const deletePatientAllergy = (obj) => {
     console.log(headers)

    return Axios.delete(baseUrl+`/allergyDetail/delete/${obj.id}`,headers).then(res=>{
       let  response = res['data']
              return  response
          }).catch(err => {
            console.log(err)
            //   return err
     })
}

export const getPatientDetails = (id) => {
    return function action(dispatch) {

    return Axios.get(baseUrl+`/user/getUserDetail/${id}`,headers).then(res=>{
        
       let  response = res['data']
       if (res.status === 200) {
        return  dispatch( {type: types.GET_PATIENT_DETAILS,payload:response.data} )
       }else{
        return dispatch( {type:types.ERROR,payload:response})
       }      
          }).catch(err => {
            console.log(err)
            return null
            //   return err
     })
    }
}
export const getPatientAllergy = (id) => {
    
    return Axios.get(baseUrl+`/PatientAllergyDetail/getAll/${id}`,headers).then(res=>{
        let  response = res['data']
              return  response
          }).catch(err => {
            console.log(err)
            return null
            //   return err
     })
}


export const getPrescription = (obj,patientId) => {
    return function action(dispatch) {
     return Axios.get(baseUrl + `/prescription/getAll/${patientId}?pageNumber=${obj.pageNumber}&search=${obj.search}&limit=${obj.limit}`,  headers).then(res=>{
          let  response = res['data']
               if (res.status === 200) {
                return  dispatch( {type: types.GET_PRISCRIPTION_LIST,payload:response} )
               }else{
                return dispatch( {type:types.ERROR,payload:response})
               }      
             }).catch(err => {
                 return dispatch({  type: types.CATCH_ERROR,
                  payload: err})
        })
      }
}

export const deletePrescription = (id) => {
   
    return Axios.delete(baseUrl+`/prescription/delete/${id}`,headers).then(res=>{
       let  response = res['data']
              return  response
          }).catch(err => {
            console.log(err)
            //   return err
     })
}
export const createPrescription = (prescriptionObj) => {
     
    return Axios.post(baseUrl+`/prescription/create`,prescriptionObj,headers).then(res=>{
       let  response = res
              return  response
          }).catch(error=>{
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                return {status: error.response.status,message:error.response.data.message}
                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the 
                // browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
          })

}

export const updatePrescription = (id,obj) => {
    console.log(id,obj)
   
delete obj.created_at
delete obj.updated_at
    return Axios.put(baseUrl+`/prescription/update/${id}`,obj,headers).then(res=>{
       let  response = res['data']
              return  response
          }).catch(err => {
              return err
     })
}










export const getAllPatients = (obj) => {
      return function action(dispatch) {
        return Axios.get(baseUrl+`/user/getAllUsers?pageNumber=${obj.pageNumber}&search=${obj.search}&limit=${obj.limit}`,auth).then(res=>{
            let  response = res['data']['data']
                     if (res.status === 200) {
                  return  dispatch( {type: types.GET_ALL_PATIENTS,payload:response} )
                 }else{
                  return dispatch( {type:types.ERROR,payload:response})
                 }      
               }).catch(err => {
                return catchError(dispatch,err)

                // return dispatch({  type: types.CATCH_ERROR,
                //     payload: err})
          })
        }
}
export const getMyProfile= ( ) => {

    auth.headers.Authorization="JWT "+localStorage.getItem("app-token")
     return function action(dispatch) {
        return Axios.get(baseUrl+`/user`,auth).then(res=>{
            let  response = res['data'] 
                     if (res.status === 200) {
                  return  dispatch( {type: types.MY_PROFILE,payload:response} )
                 }else{
                  return dispatch( {type:types.ERROR,payload:response})
                 }      
               }).catch(error => {
                  return catchError(dispatch,error)
                //    return dispatch({  type: types.CATCH_ERROR,
                //     payload: err})
          })
        }
}
export const updatePatient = (id,obj) => {
    
    return Axios.put(baseUrl+`/user/updateUser/${id}`,obj,headers).then(res=>{
       let  response = res['data']
              return  response
          }).catch(err => {
            return returnCatchError(err)
     })
}

export const createPatient = (userObj) => {
    
    return Axios.post(baseUrl+`/auth/registration`,userObj,{headers}).then(res=>{
        console.log(res)

        let  response = res
        // if(response.status===200){
            return  response
        // }
          }).catch(error=>{
             if (error.response) {
                return {status: error.response.status,data:{message:error.response.data.message}}
            } else if (error.request) {
                console.log(error.request);
                return {status: 400,data:{message:"Something Went wrong"}}

            } else {
                console.log('Error', error.message);
                return {status: 400,data:{message:"Something Went wrong"}}

            }
            console.log(error.config);
          })

}



export const createUser=(inputDdata)=>{
   
    return Axios.post(baseUrl+'/auth/login',inputDdata).then(res=>{
    let response=res['data']
       if (response.statusCode === 200) {
        return store.dispatch({type:types.LOGIN_SUCCESS,payload:response})
       }else{
         return store.dispatch({type:types.LOGIN_FAILURE,payload:response.message})

       }      
     }).catch(err => {
         return store.dispatch({type:types.LOGIN_FAILURE,payload:err})
     })
  }
  
export const updateUser = (id,obj) => {
    
         return Axios.put(baseUrl+`/user/${id}/updateUser`,obj).then(res=>{
            let  response = res['data']
                   return  response
               }).catch(err => {
                   return err
          })
  }

  export const deleteUser = (id) => {
   console.log(headers)
         return Axios.delete(baseUrl+`/user/deletePatient/${id}`,headers).then(res=>{
            let  response = res['data']
                   return  response
               }).catch(err => {
                   return err
          })
  }

  export const getRoles = () => {
   
         return Axios.get(baseUrl+`/auth/getRole`).then(res=>{
            let  response = res['data']
                   return  response
               }).catch(err => {
                   return err
          })
  }
  function returnCatchError(error){
    console.log(error);
    if (error.response) {
      console.log(error.response,error.response.status);
      error.response.status = error.response.data&&error.response.data==="Unauthorized"?400:error.response.status
        return {status:error.response.status,message:error.response.data}
     } else if (error.request) {
         return {status:201,message:error.request}
    } else {
        console.log('Error', error.message);
        return {status:201,message:error.message}
    }
}

  function catchError(dispatch,error){
    console.log(error);
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