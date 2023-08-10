import React from 'react';
import './../../App.css';

function SocialNet() {
  return (
    <div>
      <div className="app-wrapper">
        <header className="header">
          <img
            src="https://gs.archives.gov.by/wp-content/uploads/elementor/thumbs/Mg16-MstislavlG-oedppvw7rbfvqccfvzlgk088khnikwlcsansignbbk.png"
            alt=""
            width="70px"
          />
        </header>
        <nav className="nav">
          <div>
            <div>
              <a href="#">Profile</a>
            </div>
            <div>
              <a href="#">Messages</a>
            </div>
            <div>
              <a href="#">Friends</a>
            </div>
            <div>
              <a href="#">Music</a>
            </div>
            <div>
              <a href="#">Settings</a>
            </div>
          </div>
        </nav>
        <main className="main">
          <div>
            <img
              className="main-cap"
              src="https://hips.hearstapps.com/hmg-prod/images/night-scene-milky-way-background-royalty-free-image-1668789648.jpg?resize=1200:*"
              alt="night sky"
            ></img>
          </div>
          <div className="main-content">
            Content
            <div className="user-pic">
              <img
                className="user-pic-image
            "
                src="https://pyxis.nymag.com/v1/imgs/1f6/bed/2325a6b72ed3990a857b5de86f9b770c17-16-homer-simpson.rsquare.w330.jpg"
                alt="it's a user pic"
              />
            </div>
            <div className="user-description">
              <div>Name</div>
              <div>BirthDate</div>
              <div>City</div>
              <div>Education</div>
              <div>Marital status</div>
            </div>
          </div>
          <div className="new-post">
            <input type="textarea" />
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
          </div>
        </main>
      </div>
    </div>
  );
}

export default SocialNet;
