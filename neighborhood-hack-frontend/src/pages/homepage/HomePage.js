import React from 'react';
import Nav from "../../components/navBar/Nav";
import NewBoardForm from '../../newBoard/NewBoardForm';

const HomePage = () => {
  return (
    
    <div>
      <Nav/>
      <h1>Homepage</h1>
      <NewBoardForm />
    </div>
  );
};

export default HomePage;
