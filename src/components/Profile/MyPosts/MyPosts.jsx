import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import AddNewPostForm from './../../Dialogs/AddMessageForm.jsx/AddMessageForm';

const MyPosts = React.memo((props) => {    
    let postsElements = props.posts.map(p =>
        <Post
            key={p.id}
            message={p.message}
            likesCount={p.likesCount}
        />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <AddNewPostForm onSubmit={onAddPost} />

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});



export default MyPosts;