import {BlogStyle} from "../assets/styles/index.js";

const Blog = ({blog, updateCount, updateBookmarkCount}) => {
    const {Author_name, Blog_title, Blog_cover_image, Author_image, Published_date, tags, Time_to_read} = blog
    return (
        <BlogStyle>
            <img src={Blog_cover_image} alt="Blog Cover Image"/>
            <div className='b-header'>
                <div className='author'>
                    <div className='author-img'>
                        <img src={Author_image} alt="Author-image"/>
                    </div>
                    <div className='author-info'>
                        <p><strong>{Author_name}</strong></p>
                        <p><small>{Published_date}</small></p>
                    </div>
                </div>
                <div className='bookmark'>
                    <div>
                        <small>
                            {Time_to_read} mins read
                        </small>
                    </div>
                    <div>
                        <button onClick={() => updateBookmarkCount(1, Blog_title)}><i
                            className="fa-regular fa-bookmark xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='blog-title'>
                <h2>{Blog_title}</h2>
            </div>
            <div className='tag'>
                {
                    tags.map((tag, i) => <p key={i}>#{tag}</p>)
                }
            </div>
            <div className='read'>
                <button onClick={() => updateCount(Time_to_read)}>Mark as read</button>
            </div>
        </BlogStyle>
    );
};

export default Blog;