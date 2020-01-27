import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (          
    <div className={s.item}>
      <img src='https://econet.ru/uploads/pictures/456173/content_199820.jpg' alt=''/>
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div> 
  )
}

export default Post;