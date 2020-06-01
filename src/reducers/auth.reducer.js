
   import  * as types from "../actions/types";

const initialState={
    email:"",
    my_profile:{},
    password:"",
     fields: {},
    errors: {},
    user:{},
    allTransulator:[],
    errorObj:{},
    tokenExprired:false
  };
   export const  loginReducer =(state=initialState,action)=>{
       switch(action.type){
        case types.ERROR:{
            return {...state,errorObj:action.payload}
        }
           case types.LOGIN_SUCCESS:{
               return {...state,user:action.payload,errors:null}
           }
           case types.UNAUTHORIZED:{
            return {...state,tokenExprired:true}
        }

           case types.LOGIN_FAILURE:{
               return state 
           }
           case types.MY_PROFILE:{
            return {...state,my_profile:action.payload,errors:null} 
        }
           
           case types.GET_USERS:{
            return  {...state,allTransulator:action.payload}
           }
           case types.USER_FAILURE:{
               return  {...state,allTransulator:action.payload}
           }
           default:{
            return {...state,errors:null,tokenExprired:false,errorObj:{}};
           }
       }
       }