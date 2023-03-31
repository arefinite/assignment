import {useEffect, useState} from 'react';
import {Blog} from "./index.js";

const Blogs = ({updateCount, updateBookmarkCount}) => {
    let blogContent
    const [state, setState] = useState({
        loading: false,
        blogs: [],
        errMsg: null
    })
    const getBlogs = async () => {
        setState({
            ...state,
            loading: true
        })
        const response = await fetch('Data/data.json')
        try {
            const data = await response.json()
            setState({
                ...state,
                loading: false,
                blogs: data
            })

        } catch (err) {
            setState({
                ...state,
                loading: false,
                errMsg: err.message
            })
        }
    }
    const {blogs, loading, errMsg} = state
    useEffect(() => {
        getBlogs().then()
    }, [])


    if (loading) blogContent = <p>Loading...</p>
    if (errMsg) blogContent = <p>{errMsg.message}</p>
    if (!loading && !errMsg && blogs.length < 1) blogContent = <p>No blog post available</p>
    if (!loading && !errMsg && blogs.length > 0) blogContent = blogs.map(blog => <Blog key={blog.id} blog={blog}

                                                                                       updateBookmarkCount={updateBookmarkCount}
                                                                                       updateCount={updateCount}/>)

    return (
        <div>
            {blogContent}
        </div>
    );
};

export default Blogs;