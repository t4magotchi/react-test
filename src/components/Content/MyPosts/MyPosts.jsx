import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (

        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' likesCount='13'/>
                <Post message='Its my first message' likesCount='11'/>
            </div>
        </div>
    );
}

export default MyPosts;

    
