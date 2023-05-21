import React, { useState } from "react";
import axios from "axios";

function CommentForm() {
  const [comment, setComment] = useState({
    neighbor_id: "",
    message: "",
    timestamp: ""
  });

  const { neighbor_id, message, timestamp } = comment;

  const onInputChange = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/comments", comment);
      const data = response.data;
      console.log(data);
      alert("Comment submitted!");
      // Clear the form
      setComment({
        neighbor_id: "",
        message: "",
        timestamp: ""
      });
    } catch (error) {
      console.error(error);
      alert("Error submitting comment!");
    }
  };

  return (
    <div>
      <h2>Comment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="neighbor_id">Neighbor ID:</label> */}
          <input
            type="text"
            placeholder="Neighbor_id"
            id="neighbor_id"
            name="neighbor_id"
            value={neighbor_id}
            onChange={onInputChange}
          />
        </div>
        <div>
          {/* <label htmlFor="message">Message:</label> */}
          <input
            type="text"
            placeholder="message"
            id="message"
            name="message"
            value={message}
            onChange={onInputChange}
          />
        </div>
        <div>
          {/* <label htmlFor="timestamp">Timestamp:</label> */}
          <input
            type="text"
            placeholder="timestamp"
            id="timestamp"
            name="timestamp"
            value={timestamp}
            onChange={onInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;
