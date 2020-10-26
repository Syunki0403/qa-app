import { fetchChaptersAction } from './actions';
import { db } from '../../firebase';

const chapterRef = db.collection('chapter');

export const fetchChapters = () => {
    return async (dispatch) => {
        chapterRef
            .orderBy('order', 'asc')
            .get()
            .then(snapshots => {
                const chapterList = [];
                snapshots.forEach(snapshot => {
                    const chapter = snapshot.data();
                    chapterList.push(chapter);
                });
                dispatch(fetchChaptersAction(chapterList));
            })
    }
}