import * as actionTypes from '../actions/actionTypes';

const initialState = {
    usingState:'',
    careMember:'',
    calls:''

};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INIT_QUESTIONS:
            return {
                ...action.questions
            };
        case actionTypes.UPDATE_QUESTIONS:
            console.log( action )
            return {
                ...state,
                [action.payload.field]:action.payload.questions
            };
        default:
            return state;
    }
};

export default reducer;
