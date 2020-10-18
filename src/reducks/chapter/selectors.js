import { createSelector } from 'reselect';

const chapterSelector = (state) => state.chapter;

export const getChapter = createSelector(
    [chapterSelector],
    state => state.list
);