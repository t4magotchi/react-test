import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>

            <div className={classes.avatar} >
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>
            </div>
            <div className={classes.descriptionBlock}>ava+descr</div>

        </div>

    );
}

export default ProfileInfo;


