import React from 'react';
import {BookmarkStyle} from "../assets/styles/index.js";

const Bookmarks = ({bookmarkCount, bookmarkContent}) => {
    let bookmarkBox
    if (bookmarkCount < 1 && bookmarkContent.length < 1) bookmarkBox = 'No Bookmarks yet'
    if (bookmarkCount > 0 && bookmarkContent.length > 0) bookmarkBox = bookmarkContent.map((bookmark, i) => (
        <li key={i}>{bookmark}</li>
    ))
    return (
        <BookmarkStyle>
            <div>
                Bookmarked Blogs: {bookmarkCount}
            </div>
            <ul>
                {bookmarkBox}
            </ul>
        </BookmarkStyle>
    );
};

export default Bookmarks;