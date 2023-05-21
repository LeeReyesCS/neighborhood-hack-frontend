import React from 'react';
import Nav from "../../components/navBar/Nav";
import NewBoardForm from '../../newBoard/NewBoardForm';
import { useEffect, useState } from "react";
import axios from "axios";
import CommentForm from '../../newComment/commentForm';
import { Button} from '@mui/material';


const HomePage = () => {

  const [boards, setBoards] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchBoards();
  }, []);

  const [neighborName, setNeighborName] = useState('');

  useEffect(() => {
    const neighborId = localStorage.getItem('neighborId');
    if (neighborId) {
      fetchNeighborName(neighborId);
    }
  }, []);



  const fetchNeighborName = async (neighborId) => {
    try {
      const response = await axios.get(`http://localhost:5000/neighbors/${neighborId}`);
      const neighborData = response.data;
      setNeighborName(neighborData.name);
    } catch (error) {
      console.error(error);
    }
  };

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

  const deleteComments = async (board_id) => {
    try {
      await axios.delete(`http://localhost:5000/boards/${board_id}/comments`);
    } catch (error) {
      console.error(error);
    }
  };


  const toggleCommentForm = async (board_id) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        board.board_id === board_id ? { ...board, showCommentForm: !board.showCommentForm } : board
      )
    );
  
    if (!boards.find((board) => board.board_id === board_id).comments) {
      try {
        const response = await axios.get(`http://localhost:5000/${board_id}/comments`);
        const commentsData = response.data;
        setBoards((prevBoards) =>
          prevBoards.map((board) =>
            board.board_id === board_id ? { ...board, comments: commentsData } : board
          )
        );
      } catch (error) {
        console.error(error);
      }
    }
  };


  const addComment = async (board_id, comment) => {
    try {
      const response = await axios.post(`http://localhost:5000/boards/${board_id}/comments`, comment);
      const updatedBoard = response.data;
      setBoards((prevBoards) =>
        prevBoards.map((board) =>
          board.board_id === board_id ? { ...board, comments: updatedBoard.comments } : board
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const getAllComments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/comments");
      const data = response.data;
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };

  // const deleteComment = async (board_id, comment_id) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/boards/${board_id}/comments/${comment_id}`);
  //     setBoards((prevBoards) =>
  //       prevBoards.map((board) =>
  //         board.board_id === board_id ? { ...board, comments: board.comments.filter((comment) => comment.comment_id !== comment_id) } : board
  //       )
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  

  return (
    <div>
      <div>
        <Nav />
        <h1>Homepage</h1>
        <NewBoardForm fetchBoards={fetchBoards} />
        <h1>Exisiting Boards</h1>
        {boards.map((board) => (
          <div key={board.board_id}>
            <h3>Title: {board.board_title}</h3>
            <p>Looking For: {board.looking_for}</p>
            <p>Timestamp: {board.timestamp}</p>
            <p>Message: {board.message}</p>
            <Button onClick={() => toggleCommentForm(board.board_id)}>
              {board.showCommentForm
                ? "Hide Comment Form"
                : "Show Comment Form"}
            </Button>
            {board.showCommentForm && (
              <CommentForm board_id={board.board_id} addComment={addComment} />
            )}

            {comments.map((comment) => (
                    <div key={comment.comment_id}>
                      <p>Name: {comment.name}</p>
                      <p>Message: {comment.message}</p>
                      <p>Timestamp: {comment.timestamp}</p>
                    </div>
                  ))}

            <button onClick={() => deleteBoard(board.board_id)}>Delete</button>
          </div>
        ))}
        <Button onClick={() => getAllComments()}>See All Comments</Button>
      </div>
    </div>
  );
};

export default HomePage;
