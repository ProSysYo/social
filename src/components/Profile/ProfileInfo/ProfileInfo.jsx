import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div>
            <div>
                <img src="https://www.softrew.ru/wp-content/cache/thumb/75/fb4c03e3eee2d75_810x260.png" alt='' />
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large} alt=''/>
                
            </div>
        </div>
    )
}

export default ProfileInfo;