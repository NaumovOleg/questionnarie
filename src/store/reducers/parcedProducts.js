import * as actionTypes from '../actions/actionTypes';

const initialState = {};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_PARSED_PRODUCTS:
            return {...action.products};
        default:
            return state;
    }
};

export default reducer;
