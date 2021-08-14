import React from 'react';
import "./Landing.css";

const SurveyCreator = () => {
  return (
    <div className="landing wrapper">
      <main>
        Create a new Survey
      </main>
      <aside>
        <div className="landing__search">
          <div className="landing__searchContainer">
            <input placeholder="Search" type="text" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SurveyCreator;