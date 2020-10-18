import { createSelector } from 'reselect';

const questionsSelector = (state) => state.questions;

export const getQuestions = createSelector(
    [questionsSelector],
    state => state.list
);