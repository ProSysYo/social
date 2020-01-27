import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://www.softrew.ru/wp-content/cache/thumb/75/fb4c03e3eee2d75_810x260.png" alt=''/>
      </div>
      <div className={s.descriptionBlock}> 
        ava + description
      </div>           
    </div>
  )
}

export default ProfileInfo;