import * as api from "../utils/api";
import { useState } from "react";

import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";

import SubmitPrompt from "./SubmitPrompt";

export default function CommentForm({ article_id, setNumOfComments, user }) {
  const [postDetails, setPostDetails] = useState({
    username: user.username,
    body: "",
  }); //Requires: {username: username, body: body} - needs to be someone who's already a use in DB otherwise 404
  const [isProcessing, setIsProcessing] = useState(false); //For button disabling during the POST request
  const [postStatus, setPostStatus] = useState(null); //To conditionally render the alert prompts based on comment input

  const handleInputChange = (e) => {
    let currDetails = postDetails;
    setPostDetails({
      ...currDetails,
      body: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //Prompt to prevent posting when no comment body is included
    if (postDetails.body.length === 0) {
      setPostStatus("incomplete");
    } else {
      api
        .postCommentsById(article_id, postDetails)
        .then((comment_id) => {
          setIsProcessing(true);
          setPostStatus("success");
          setIsProcessing(false);
          setNumOfComments(comment_id); //Sets state that will the cause the useEffect in CommentList to re-render
        })
        .catch(() => {
          setIsProcessing(true);
          setPostStatus("failure");
          setIsProcessing(false);
        });
    }
    setPostDetails({
      username: "grumpy19",
      body: "",
    }); /* Clears comment field after submission */
  };

  return (
    <Paper className="comment-form" elevation={24} square={false}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Comment"
          id="comment-field"
          placeholder="What are your thoughts about this article?"
          value={postDetails.body}
          onChange={(e) => handleInputChange(e)}
        />
        <IconButton
          className="delete-button"
          disabled={
            isProcessing ? true : false
          } /* Disables button while POST request is processing */
          variant="contained"
          color="primary"
          type="submit"
        >
          <SendIcon fontSize="large" />
        </IconButton>
      </form>
      <SubmitPrompt postStatus={postStatus} setPostStatus={setPostStatus} />
    </Paper>
  );
}
