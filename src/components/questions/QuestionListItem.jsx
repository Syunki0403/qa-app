import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    answerField: {
        display: 'flex',
        alignItems: 'flex-end'
    }
});

const QuestionListItem = (props) => {
    //const [myAnswers, setMyAnswers] = useState([]);
    const classes = useStyles();
    let textfieldList = [];

    for (let i = 0; i < props.ansnum; i++) {
        textfieldList.push(
            <div className={classes.answerField} key={i} >
                <TextField id="standard-basic" label={i + 1} />
                <p className={"answers"}>{props.answers[i]}</p>
            </div>
        );
    };

    return (
        <div>
            <h3>{props.question}</h3>
            <p>{props.text}</p>
            {textfieldList}
        </div>
    )
}

export default QuestionListItem;