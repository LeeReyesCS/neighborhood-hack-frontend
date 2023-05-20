import React, { useState } from "react";
import axios from "axios";
import {Button} from "@mui/material";
import "./NewBoardForm.css";

// Is there a way to get the neighbor's name (using neihgbor_id) to show up with the board? //
function NewBoardForm() {
  const [board, setBoard] = useState({
    board_title: "",
    looking_for: "",
    timestamp: "",
    message: ""
  });

  const { title, looking_for, timestamp, message } = board;

  const onInputChange = (event) => {
    setBoard({ ...board, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    // added async keyword
    event.preventDefault();
    console.log(
      `Title: ${title}, Looking_for: ${looking_for}, Timestamp: ${timestamp}, Message: ${message}`
    );

    try {
      // added try-catch block for error handling
      const response = await axios.post(
        "http://localhost:5000/boards",
        board
      );
      console.log(response);
      const data = response.data;
      setBoard(data);
      console.log(data); // fixed variable name
      alert("New board form submitted!")
      window.location.reload(false); // Reload the page
    } catch (error) {
      console.error(error);
      alert("Error submitting new board form!");
    }
  };

  return (
    <div className="flexit">
      <form onSubmit={handleSubmit}>
        <div className="group">
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(event) => onInputChange(event)}
          />
          <label htmlFor="name">Title:</label>
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>

        <div className="group">
          <span className="highlight"></span>
          <span className="bar"></span>
        <input
            type="text"
            id="looking_for"
            name="looking_for"
            value={looking_for}
            onChange={(event) => onInputChange(event)}
          />
           <label htmlFor="looking_for">Looking:</label>
        </div>

        <div className="group">
          <span className="highlight"></span>
          <span className="bar"></span>
          <input
                type="text"
                id="timestamp"
                name="timestamp"
                value={timestamp}
                onChange={(event) => onInputChange(event)}
              />
          <label htmlFor="timestamp">Timestamp:</label>
        </div>

        <div className="group">
          <input
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(event) => onInputChange(event)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="message">Message:</label>
        </div>

        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default NewBoardForm;