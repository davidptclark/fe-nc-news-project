import * as api from '../utils/api';
import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@material-ui/core/IconButton';

import Prompt from './Prompt';

export default function CommentForm({ article_id, setNumOfComments }) {
  const [postDetails, setPostDetails] = useState({
    username: 'grumpy19',
    body: '',
  }); //Requires: {username: username, body: body} - needs to be someone who's already a use in DB otherwise 404
  const [isProcessing, setIsProcessing] = useState(false); //For button disabling during the POST request
  const [postStatus, SetPostStatus] = useState(null); //To conditionally render the alert prompts based on comment input

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
      SetPostStatus('incomplete');
    } else {
      api
        .postCommentsById(article_id, postDetails)
        .then((comment_id) => {
          setIsProcessing(true);
          SetPostStatus('success');
          setIsProcessing(false);
          setNumOfComments(comment_id);
        })
        .catch(() => {
          setIsProcessing(true);
          SetPostStatus('failure');
          setIsProcessing(false);
        });
    }
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
      <Prompt postStatus={postStatus} SetPostStatus={SetPostStatus} />
    </Paper>
  );
}
