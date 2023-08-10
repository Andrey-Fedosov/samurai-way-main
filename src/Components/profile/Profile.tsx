import React from 'react';
import './../../../src/App.css';

export function Profile() {
  return (
    <>
      <main className="main">
        <div>
          <img
            className="main-cap"
            src="https://hips.hearstapps.com/hmg-prod/images/night-scene-milky-way-background-royalty-free-image-1668789648.jpg?resize=1200:*"
            alt="night sky"
          ></img>
        </div>
        <div className="main-content">
          <div className="user-pic">
            <img
              className="user-pic-image
    "
              src="https://pyxis.nymag.com/v1/imgs/1f6/bed/2325a6b72ed3990a857b5de86f9b770c17-16-homer-simpson.rsquare.w330.jpg"
              alt="it's a user pic"
            />
          </div>
          <div className="user-description">
            <p>Name</p>
            <p>BirthDate</p>
            <p>City</p>
            <p>Education</p>
            <p>Marital status</p>
          </div>
        </div>

        <div className="post-section">
          <div className="new-post ">
            <h3 className="new-post-title">Add new post</h3>
            <textarea></textarea>
            <button>Send</button>
          </div>
          <div className="all-posts">
            <div className="post-item">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                eveniet quo, cum nam ipsam est, omnis voluptatum repellat ipsa
                fuga praesentium autem magnam, animi unde? Rem magni minus nam
                ut!
              </p>
            </div>
            <div className="post-item">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                eveniet quo, cum nam ipsam est, omnis voluptatum repellat ipsa
                fuga praesentium autem magnam, animi unde? Rem magni minus nam
                ut!
              </p>
            </div>
            <div className="post-item">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                eveniet quo, cum nam ipsam est, omnis voluptatum repellat ipsa
                fuga praesentium autem magnam, animi unde? Rem magni minus nam
                ut!
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
