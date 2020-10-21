import * as Actions from './actions';
import initialState from '../store/initialState';

export const AnswersheetReducer = (state = initialState.answersheet, action) => {
    switch (action.type) {
        case Actions.FETCH_ANSWERSHEET:
            return {
                ...state,
                list: {...action.payload}
            }
        default:
            return state;
    }
}