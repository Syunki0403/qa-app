import * as Actions from './actions';
import initialState from '../store/initialState';

export const QuestionsReducer = (state = initialState.questions, action) => {
    switch (action.type) {
        case Actions.FETCH_QUESTIONS:
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state;
    }
}