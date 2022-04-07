import * as api from "../utils/api";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export default function CommentVotes({ votes, comment_id, created_at }) {
  const [sentVotes, setSentVotes] = useState(0);
  const [err, setErr] = useState(null);

  const handleVoteClick = (voteChange) => {
    setSentVotes((currCount) => currCount + voteChange);
    /* To prevent multiple votes per user */
    setErr(null);
    api.patchVotesByCommentId(comment_id, voteChange).catch((err) => {
      setSentVotes((currCount) => currCount - voteChange);
      setErr("Something went wrong, please vote again.");
    });
  };

  if (err) return <p>{err}</p>;
  return (
    <section className="votes">
      <ul className="card-info">
        <li>Votes: {votes + sentVotes} </li>
        <li>{created_at.slice(0, -14)} </li>
      </ul>
      <IconButton
        disabled={sentVotes === 1 ? true : false}
        onClick={() => handleVoteClick(1)}
        color="primary"
      >
        <ThumbUpIcon />
      </IconButton>
      <IconButton
        disabled={sentVotes === -1 ? true : false}
        onClick={() => handleVoteClick(-1)}
        color="primary"
      >
        <ThumbDownIcon />
      </IconButton>
    </section>
  );
}
