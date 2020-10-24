

import * as types from '../actions/types';

const initialState = {

    errors: null,
    headerTitle: "",
    ass_user: {},
    logged_user:"",

};

const assessmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPLOAD_FILE: {
            return { ...state, errors: action.payload };
        }
        case types.ASSESSMENT_USER: {
            return { ...state, ass_user: action.payload };
        }
        case types.LOGGED_USER: {
            return { ...state, logged_user: action.payload };
        }
        case types.PAGE_TITLE:{
            return { ...state, headerTitle: action.payload };       
        }

        default: {
            return state;
        }
    }
};

export default assessmentReducer;
