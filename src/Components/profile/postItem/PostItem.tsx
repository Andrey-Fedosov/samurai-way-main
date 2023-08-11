import React from 'react';
import st from './PostItem.module.css';
import image from './../../../assets/margeAva.png';

type PostItemPropsType = {
  postText: string;
};

export function PostItem(props: PostItemPropsType) {
  return (
    <>
      <div className={st.postItem}>
        <div className={st.postItemImage}>
          <img src={image} alt=""></img>
        </div>
        <div className="postItemBox">
          <p className={st.postItemText}>{props.postText}</p>
          <span className={st.postItemLike}>Like</span>
        </div>
      </div>
    </>
  );
}
