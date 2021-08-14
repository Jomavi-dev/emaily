import React from 'react';
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing wrapper">
      <main>
        <img className="landing__hero" src='img/pex1.jpg' alt="hero-img" />
      </main>
      {/* <aside>
        <div className="landing__search">
          <div className="landing__searchContainer">
            <input placeholder="Search" type="text" />
          </div>
        </div>
      </aside> */}
    </div>
  );
};

export default Landing;