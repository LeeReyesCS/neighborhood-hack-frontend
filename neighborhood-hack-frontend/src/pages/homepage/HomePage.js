import React from 'react';
import Nav from "../../components/navBar/Nav";
import NewBoardForm from '../../newBoard/NewBoardForm';
import { useEffect, useState } from "react";
import axios from "axios";
import CommentForm from '../../newComment/commentForm';
import { Button} from '@mui/material';


const HomePage = () => {

  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      const response = await axios.get("http://localhost:5000/boards");
      const data = response.data;
      setBoards(data);
    } catch (error) {
      console.error(error);
    }
  };



  const deleteBoard = async (board_id) => {
    try {
      await axios.delete(`http://localhost:5000/boards/${board_id}`);
      fetchBoards(); // Refresh the board list
    } catch (error) {
      console.error(error);
    }
  };

///////
const toggleCommentForm = (board_id) => {
  setBoards(prevBoards =>
    prevBoards.map(board =>
      board.board_id === board_id ? { ...board, showCommentForm: !board.showCommentForm } : board
    )
  );
};
///////
  return (
    <div>
    <div>
      <Nav/>
      <h1>Homepage</h1>
      <NewBoardForm />
      {/* <Button id="add-comment-btn">Add Comment</Button>
        <CommentForm />
      </Button> */}
        <h1>Exisiting Boards</h1>
    {boards.map((board) => (
      <div key={board.board_id}>
        <h3>Title: {board.board_title}</h3>
        <p>Looking For: {board.looking_for}</p>
        <p>Timestamp: {board.timestamp}</p>
        <p>Message: {board.message}</p>
        <Button onClick={() => toggleCommentForm(board.board_id)}>
              {board.showCommentForm ? "Hide Comment Form" : "Show Comment Form"}
            </Button>
            {board.showCommentForm && (
              <CommentForm boardId={board.board_id} />
            )}
        <button onClick={() => deleteBoard(board.board_id)}>
            Delete
          </button>
      </div>
    ))}
    </div>
    </div>
  );
};

export default HomePage;