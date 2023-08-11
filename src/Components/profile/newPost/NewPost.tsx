import React from 'react';
import st from './NewPost.module.css';

export function NewPost() {
  return (
    <div className={st.newPost}>
      <h3 className={st.newPostTitle}>Add new post</h3>
      <textarea placeholder="add your post here..."></textarea>
      <button className={st.sendButton}>Send</button>
    </div>
  );
}
