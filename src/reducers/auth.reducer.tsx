import  types from "../actions/types";

const initialState={
    
  };
 const  Auth =(state=initialState,action:any)=>{
       switch(action.type){
        case types.ERROR:{
            return {...state,errorObj:action.payload}
        }
           case types.LOGIN_SUCCESS:{
               return {...state,user:action.payload,errors:null}
           }
           default:{ return state}
        }
       }

export default Auth