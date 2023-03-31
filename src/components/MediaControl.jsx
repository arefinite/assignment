import React, {useState} from 'react';
import {MainContent, RightBar} from "./index.js";
import {MediaControlStyle} from "../assets/styles/index.js";
import {toast} from "react-hot-toast";

const MediaControl = () => {
    const [timeCount, setTimeCount] = useState(0)
    const [bookmarkCount, setBookmarkCount] = useState(0)
    const [bookmarkContent, setBookmarkContent] = useState([])
    const updateCount = (min) => {
        setTimeCount(prev => prev + min)
    }

    const updateBookmarkCount = (count, content) => {
        setBookmarkCount(prev => prev + count)
        setBookmarkContent([...bookmarkContent, content])
        toast.success('Successfully updated bookmark')
    }
    return (
        <MediaControlStyle>

            <MainContent updateCount={updateCount}
                         updateBookmarkCount={updateBookmarkCount}/>
            <RightBar timeCount={timeCount} bookmarkCount={bookmarkCount} bookmarkContent={bookmarkContent}/>

        </MediaControlStyle>
    );
};

export default MediaControl;