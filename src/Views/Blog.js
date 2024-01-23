import React from 'react';
import '../Css/Blog.css';
import EntryBlog from '../BlogComponents/EntryBlog';
import BlogStorystream from '../BlogComponents/BlogStorystream';
const Blog = () => {

    return (
        <>
            <div className="EntryMain">
                <EntryBlog />
                <BlogStorystream />
            </div>
        </>

    );
};

export default Blog;
