import { createSelector } from 'reselect';

const answersheetSelector = (state) => state.answersheet;

export const getAnswersheet = createSelector(
    [answersheetSelector],
    state => state.list
);