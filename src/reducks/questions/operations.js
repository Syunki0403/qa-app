import { fetchQuestionsAction } from './actions';
import { db } from '../../firebase';

const questionsRef = db.collection('dataset').doc('questions');

export const fetchQuestions = (number) => {
    return async (dispatch) => {
        questionsRef.get()
            .then(doc => {
                const questionsDoc = doc.data();
                const questions = questionsDoc[number];

                if (questions) {
                    dispatch(fetchQuestionsAction(questions));
                } else {
                    dispatch(fetchQuestionsAction([]));
                }
            })
    }
}