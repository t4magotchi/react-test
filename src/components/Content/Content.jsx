import React from 'react';
import classes from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Content;

    
