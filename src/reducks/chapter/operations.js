import { fetchChaptersAction } from './actions';
import { db } from '../../firebase';

const chapterRef = db.collection('dataset').doc('chapter');

export const fetchChapters = () => {
    return async (dispatch) => {
        chapterRef.get()
            .then(doc => {
                const chapterList = [];
                if (doc && doc.exists) {
                    const chapters = doc.data();

                    (Object.keys(chapters)).map((chapter, index) => {
                        switch (index) {
                            case 0:
                                chapterList.push(chapters['one']);
                                break;
                            case 1:
                                chapterList.push(chapters['two']);
                                break;
                            case 2:
                                chapterList.push(chapters['three']);
                                break;
                            case 3:
                                chapterList.push(chapters['four']);
                                break;
                            case 4:
                                chapterList.push(chapters['five']);
                                break;
                        }
                    });
                }
                // snapshots.forEach(snapshot => {
                //     console.log("debug");
                //     const chapter = snapshot.data();
                //     chapterList.push(chapter);
                // });
                dispatch(fetchChaptersAction(chapterList));
            })
    }
}