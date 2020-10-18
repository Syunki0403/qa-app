import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestions } from '../../reducks/questions/operations';
import { getQuestions } from '../../reducks/questions/selectors';
import QuestionListItem from './QuestionListItem';
import Button from '@material-ui/core/Button';

const QuestionList = () => {
    const selector = useSelector((state) => state);
    const path = selector.router.location.pathname;
    const id = path.split('/question/')[1];
    const dispatch = useDispatch();
    const questions = getQuestions(selector);

    useEffect(() => {
        dispatch(fetchQuestions(id));
    }, []);

    return (
        <div>
            {questions.length > 0 && (
                questions.map((value, index) => (
                    <QuestionListItem question={value.question} text={value.text} ansnum={value.ansnum} answers={value.answers} key={index} />
                ))
            )}
            {questions.length > 0 && (
                <Button variant="contained" color="primary">回答を送信</Button>
            )}
        </div>
    )
}

export default QuestionList;