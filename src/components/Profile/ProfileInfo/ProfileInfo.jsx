import React, { useState } from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }   

    const onMainPhotoSelectd = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )        
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
                {editMode 
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData 
                        profile={profile} 
                        isOwner={isOwner}
                        goToEditMode={ () => {setEditMode(true)} }
                    />
                }                
                <br />
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner &&
                <div>
                    <button onClick={goToEditMode} >edit</button>
                </div>
            }
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact contactTitle={key} contactValue={profile.contacts[key]} key={key} />
                })}
            </div>
        </div>
    )
};

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={styles.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
};

export default ProfileInfo;