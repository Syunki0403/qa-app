import * as Actions from './actions';
import initialState from '../store/initialState';

export const ChapterReducer = (state = initialState.chapter, action) => {
    switch (action.type) {
        case Actions.FETCH_CHAPTERS:
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state;
    }
}