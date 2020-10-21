import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { fetchQuestions } from '../../reducks/questions/operations';
import { fetchAnswersheet } from '../../reducks/answersheet/operations';
import { getQuestions } from '../../reducks/questions/selectors';
import { getAnswersheet } from '../../reducks/answersheet/selectors';
import QuestionListItem from './QuestionListItem';
import Button from '@material-ui/core/Button';
import { push } from 'connected-react-router';

const useStyles = makeStyles({
    button: {
        width: '15em'
    }
});

const QuestionList = () => {
    const [myAnswersheet, setmyAnswersheet] = useState({});
    const selector = useSelector((state) => state);
    const path = selector.router.location.pathname;
    const id = path.split('/question/')[1];
    const dispatch = useDispatch();
    const questions = getQuestions(selector);
    const answersheet = getAnswersheet(selector);
    const classes = useStyles();

    useEffect(() => {
        dispatch(fetchQuestions(id));
        dispatch(fetchAnswersheet(id));
    }, []);

    // enterキー押下による送信を防ぐ
    window.document.onkeydown = function (event) {
        if (event.key === 'Enter') return false;
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();

        window.scrollTo(0, 0);

        // 正誤判定
        for (let key in myAnswersheet) {
            const answerElement = document.getElementById(key);
            const answer = answerElement.textContent;
            if (answer === myAnswersheet[key]) {
                answerElement.nextElementSibling.style.display = "block";
            } else {
                answerElement.style.display = "block";
            }
        }

        // ボタンの表示・非表示
        document.getElementById("submitAnswerBtn").classList.add('hideBtn');
        document.getElementById("oneMoreBtn").classList.remove('hideBtn');
    };

    return (
        <form onSubmit={handleSubmitForm}>
            {questions.length > 0 && (
                questions.map((value, index) => (
                    <QuestionListItem
                        myAnswersheet={myAnswersheet}
                        setmyAnswersheet={setmyAnswersheet}
                        answersheet={answersheet}
                        question={value.question}
                        text={value.text}
                        img={value.img}
                        qid={value.id}
                        ansnum={value.ansnum}
                        answers={value.answers}
                        key={index}
                    />
                ))
            )}
            {questions.length > 0 && (
                <div className={"buttonArea"}>
                    <div id={"submitAnswerBtn"} className={"submitAnswerBtn"}>
                        <Button className={classes.button} variant="contained" type="submit" color="primary">回答を送信</Button>
                    </div>
                    <div id={"oneMoreBtn"} className={"oneMoreBtn hideBtn"}>
                        <Button className={classes.button} variant="contained" type="button" color="primary" onClick={() => window.location.reload()}>もう一度挑戦</Button>
                    </div>
                    <div>
                        <Button className={classes.button} variant="contained" type="button" onClick={() => dispatch(push('/'))}>TOPページへ戻る</Button>
                    </div>
                </div>
            )}
        </form>
    )
}

export default QuestionList;