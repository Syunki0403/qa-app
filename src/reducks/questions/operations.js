import { fetchQuestionsAction } from './actions';
import { db } from '../../firebase';

const questionsRef = db.collection('questions');

export const fetchQuestions = (number) => {
    return async (dispatch) => {
        questionsRef.doc(number)
            .get()
            .then(doc => {
                const questionsDoc = doc.data();
                dispatch(fetchQuestionsAction(questionsDoc));

                // if (questionsDoc) {
                //     dispatch(fetchQuestionsAction(questionsDoc));
                // } else {
                //     dispatch(fetchQuestionsAction([]));
                // }
            })
    }
}