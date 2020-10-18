import React, { useEffect } from 'react';
import ChapterListItem from './ChapterListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getChapter } from '../../reducks/chapter/selectors';
import { fetchChapters } from '../../reducks/chapter/operations';

const ChapterList = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const chapters = getChapter(selector);

    useEffect(() => {
        dispatch(fetchChapters());
    }, []);

    return (
        <div>
            {chapters.length > 0 && (
                chapters.map((chapter, index) => (
                    <ChapterListItem title={chapter.title} texts={chapter.texts} key={index} />
                ))
            )}
        </div>
    )
}

export default ChapterList;
