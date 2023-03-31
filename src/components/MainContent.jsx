import React from 'react';
import {Blogs} from "./index.js";

const MainContent = ({updateCount, updateBookmarkCount}) => {
    return (

        <Blogs updateCount={updateCount}
               updateBookmarkCount={updateBookmarkCount}/>

    );
};

export default MainContent;