import React from 'react';
import classes from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Content = () => {
    return (
        <div className={classes.content}>
            <img
                src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>
            <div>ava+descr</div>
            <MyPosts/>
        </div>
    );
}

export default Content;

    
