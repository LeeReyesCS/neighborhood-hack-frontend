import React from "react";
import "./LandingPage.css";
import LandingPic from "../../images/Landing_page.jpg";
import NewBoardForm from "../../newBoard/NewBoardForm";
import Nav from "../../components/navBar/Nav";

const LandingPage = () => {
  return (
    <>
      <Nav />
      <div>
        <img className="landing_pic" src={LandingPic} alt="" />
        <div className="landingPage-header">
          <h1>Savvy Swap</h1>
          <h4>Sharing Talents, Building Community</h4>
        </div>
        <div className="landingPage-text">
          <p>
            “The inspiration behind the creation of Savvy Swap stemmed from a
            strong desire to foster community engagement, promote
            sustainability, and facilitate the exchange of innovative ideas.
            Recognizing the power of connecting individuals from diverse
            backgrounds, the app was developed with the intention of providing a
            vibrant platform where people could come together, collaborate, and
            make a positive impact on their communities. By cultivating a sense
            of belonging and encouraging active participation, Savvy Swap aims
            to harness the collective knowledge, skills, and resources present
            within local communities. Moreover, by promoting sustainable
            practices through the reduction of resource consumption, the app
            seeks to empower individuals to utilize existing resources and
            expertise, ultimately minimizing waste and environmental impact.
            Savvy Swap stands as a testament to the belief that through creative
            collaboration and a shared commitment to sustainability, we can
            build stronger, more resilient communities for a better future.”
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
