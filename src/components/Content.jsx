import React from 'react';
import classes from './Content.module.css';
const Content = () => {
    return (
      <div className={classes.content}>
        <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>
        <div>ava+descr</div>
        <div>
          my posts
          <div>new post</div>
          <div>
            <div className='item'>post 1 </div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    );
}

export default Content;

    
