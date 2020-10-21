import React from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

const ChapterListItem = (props) => {
    const dispatch = useDispatch();

    return (
        <div className={"chapterBox"}>
            <h3>{props.title}</h3>
            {(props.texts).map((value, index) => (
                <p className={"questionsLinkCover"} key={index}>
                    <a className={"questionsLink"} onClick={() => dispatch(push(`/question/${value.id}`))}>{value.text}</a>
                </p>
            ))}
        </div>
    )
}

export default ChapterListItem;