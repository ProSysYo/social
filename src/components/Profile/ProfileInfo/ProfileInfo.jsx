import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader';
//import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelectd = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt='' className={styles.mainPhoto} />
                <br />
                {isOwner &&
                    <input
                        type={"file"}
                        onChange={onMainPhotoSelectd}
                    />
                }
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    )
};

export default ProfileInfo;