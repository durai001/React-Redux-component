
import  * as types from "../actions/types";
import _ from 'lodash'

const initialState={
patients:{pagination: {page: 1, pageSize: 10, rowCount: 3, pageCount: 1},patients:[]},
patientObj:{},
patientId:0,
patinetPriscription:[],
errors:null
};
    

const patientReducer = (state = initialState, action) => {

switch(action.type){
    case types.UPDATE_USER:{
        return {...state,user:action.payload,errors:null}
    }
    case types.PATIENT_ID:{
        console.log(action.payload)
         return {...state,patientId:action.payload.id,patientObj:_.isEmpty(action.payload)?{}:action.payload,errors:null}
    }
    case types.GET_PATIENT_DETAILS:{
        return {...state,patientObj:action.payload,errors:null}
   }
    
    case types.GET_PRISCRIPTION_LIST:{
        return {...state,patinetPriscription:action.payload,errors:null}
   }
    
    case types.GET_ALL_PATIENTS:{
        return {...state,patients:action.payload}
    }
    case types.CATCH_ERROR:{
        return {...state,errors:action.payload}
    }
    default:{
        return {...state,errors:null};
    }
}
}

export default patientReducer;