import React from "react";
import "./LandingPage.css";
import LandingPic from "../../images/Landing_page.jpg";
import NewBoardForm from "../../newBoard/NewBoardForm";

const LandingPage = () => {
  return (
    <div>
      <img className="landing_pic" src={LandingPic} alt="" />
      <div className="landingPage-header">
        <h1>Savvy Swap</h1>
        <h4>Sharing Talents, Building Community</h4>
      </div>
    </div>
  );
};

export default LandingPage;
