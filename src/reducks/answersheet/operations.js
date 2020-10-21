import { fetchAnswersheetAction } from './actions';
import { db } from '../../firebase';

const answersheetRef = db.collection('dataset').doc('answersheet');

export const fetchAnswersheet = (number) => {
    return async (dispatch) => {
        answersheetRef.get()
            .then(doc => {
                const answersheetDoc = doc.data();
                const answersheet = answersheetDoc[number];

                if (answersheet) {
                    dispatch(fetchAnswersheetAction(answersheet));
                } else {
                    dispatch(fetchAnswersheetAction({}));
                }
            })
    }
}