import React from 'react';
import st from './../profile/Profile.module.css';
import { PostItem } from './postItem/PostItem';
import { NewPost } from './newPost/NewPost';

export function Profile() {
  return (
    <>
      <main className={st.main}>
        <div>
          <img
            className={st.mainCap}
            src="https://hips.hearstapps.com/hmg-prod/images/night-scene-milky-way-background-royalty-free-image-1668789648.jpg?resize=1200:*"
            alt="night sky"
          ></img>
        </div>
        <div className={st.mainContent}>
          <div className={st.userPic}>
            <img
              className={st.userPicImage}
              src="https://pyxis.nymag.com/v1/imgs/1f6/bed/2325a6b72ed3990a857b5de86f9b770c17-16-homer-simpson.rsquare.w330.jpg"
              alt="it's a user pic"
            />
          </div>
          <div className={st.userDescription}>
            <p>Name</p>
            <p>BirthDate</p>
            <p>City</p>
            <p>Education</p>
            <p>Marital status</p>
          </div>
        </div>

        <div className={st.postSection}>
          <NewPost />
          <div className={st.allPosts}>
            <PostItem postText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat porro fugit, modi nihil consequatur accusantium magnam rem deserunt ipsum recusandae minus saepe harum, ad nam ducimus voluptate culpa mollitia." />
            <PostItem postText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat porro fugit." />
            <PostItem postText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat porro fugit, modi nihil consequatur accusantium magnam rem deserunt ipsum recusandae minus saepe harum, ad nam ducimus voluptate culpa mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat porro fugit, modi nihil consequatur accusantium magnam rem deserunt ipsum recusandae minus saepe harum, ad nam ducimus voluptate culpa mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat porro fugit, modi nihil consequatur accusantium magnam rem deserunt ipsum recusandae minus saepe harum, ad nam ducimus voluptate culpa mollitia." />
          </div>
        </div>
      </main>
    </>
  );
}
