import React from 'react';
import {SpentTimeStyle} from "../assets/styles/index.js";

const SpentTime = ({timeCount}) => {
    return (
        <SpentTimeStyle>
            Spent time on read : {timeCount} mins
        </SpentTimeStyle>
    );
};

export default SpentTime;