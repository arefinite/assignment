import React from 'react';
import {Bookmarks, SpentTime} from "./index.js";
import {RightBarStyle} from "../assets/styles/index.js";

const RightBar = ({timeCount, bookmarkCount, bookmarkContent}) => {
    return (
        <RightBarStyle>
            <SpentTime timeCount={timeCount}/>
            <Bookmarks bookmarkCount={bookmarkCount} bookmarkContent={bookmarkContent}/>
        </RightBarStyle>
    );
};

export default RightBar;