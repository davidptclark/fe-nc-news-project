import * as api from "../utils/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export default function ArticleVotes({ votes }) {
  const [sentVotes, setSentVotes] = useState(0);
  const [err, setErr] = useState(null);
  const { article_id } = useParams();

  const handleVoteClick = (voteChange) => {
    setSentVotes((currCount) => currCount + voteChange);
    /* To prevent multiple votes per user */
    setErr(null);
    api.patchVotesByArticleId(article_id, voteChange).catch((err) => {
      setSentVotes((currCount) => currCount - voteChange);
      setErr("Something went wrong, please vote again.");
    });
  };

  if (err) return <p>{err}</p>;
  return (
    <section className="votes">
      <p>Votes: {votes + sentVotes}</p>
      <IconButton
        disabled={sentVotes === 1 ? true : false}
        onClick={() => handleVoteClick(1)}
        color="primary"
      >
        <ThumbUpIcon fontSize="large" />
      </IconButton>
      <IconButton
        disabled={sentVotes === -1 ? true : false}
        onClick={() => handleVoteClick(-1)}
        color="primary"
      >
        <ThumbDownIcon fontSize="large" />
      </IconButton>
    </section>
  );
}
