import * as actionTypes from './actionTypes';
import { request, setRechargeToken } from '../../utils/request';
setRechargeToken ();
export const initQuestions = ( questions ) => {
    return {
        type: actionTypes.INIT_QUESTIONS,
        questions,
    };
};

export const updateQuestions = ( field, question ) => {
    return {
        type: actionTypes.UPDATE_QUESTIONS,
        payload:{
            field:field,
            questions:question
        },
    };
};

