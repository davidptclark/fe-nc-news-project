import * as api from "../utils/api";
import { useState } from "react";
import Card from "@mui/material/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import CommentVotes from "./CommentVotes";

export default function CommentListItem({
  comment: { comment_id, author, body, created_at, votes },
  user,
  setDeleteStatus,
}) {
  const [isProcessing, setIsProcessing] = useState(false); //For button disabling during the POST request

  const handleDelete = (comment_id) => {
    setIsProcessing(true);
    api
      .deleteCommentById(comment_id)
      .then(() => {
        setIsProcessing(false);
        setDeleteStatus("success");
      })
      .catch(() => {
        setIsProcessing(false);
        setDeleteStatus("failure");
      });
  };

  return (
    <Card className="single-article-paper" elevation={8} square={false}>
      <h3>{author}</h3>
      <p>{body}</p>
      <CommentVotes
        votes={votes}
        comment_id={comment_id}
        created_at={created_at}
      />
      {user.username === author ? (
        <IconButton
          onClick={() => handleDelete(comment_id)}
          disabled={
            isProcessing ? true : false
          } /* Disables button while POST request is processing */
          variant="contained"
          color="primary"
          type="submit"
        >
          <DeleteIcon></DeleteIcon>
        </IconButton>
      ) : null}
    </Card>
  );
}
