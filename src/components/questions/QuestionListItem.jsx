import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import imgUX from '../../assets/img/ui_ux02.png';

const useStyles = makeStyles({
    answerFieldBox: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    answerField: {
        width: '300px'
    }
});

const QuestionListItem = (props) => {
    console.log(imgUX)




    const classes = useStyles();
    let textfieldList = [];

    // 入力値をstateに保管
    const handleChangeAns = (e) => {
        // useEffectでDBからのanswersheetをセットできなかったため
        props.setmyAnswersheet({ ...props.answersheet, ...props.myAnswersheet, [e.target.name]: e.target.value });
    };

    // 一問の空欄の数
    for (let i = 0; i < props.ansnum; i++) {
        textfieldList.push(
            <div className={classes.answerFieldBox} key={i} >
                <TextField
                    id="standard-basic"
                    className={classes.answerField}
                    label={i + 1}
                    name={`${props.qid}_${i + 1}`}
                    onChange={handleChangeAns}
                    autoComplete='off'
                />
                <p id={`${props.qid}_${i + 1}`} className={"answers"}>{props.answers[i]}</p>
                <p className={"correct"}>〇</p>
            </div>
        );
    };

    return (
        <div className={"questionBox"}>
            <h3>{props.question}</h3>
            <p>{props.text}</p>
            {(props.img) &&
                <div>
                    <img src={`/static/media/${props.img}`} />
                </div>
            }
            {textfieldList}
        </div>
    )
}

export default QuestionListItem;