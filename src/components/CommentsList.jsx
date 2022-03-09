import * as React from 'react';
import * as api from '../api';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';

export default function CommentsList({ article_id }) {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //isMounted needed to overcome memory leak error: ensures component is mounted before setting state
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    api.getCommentsById(article_id).then((comments) => {
      if (isMounted) {
        setCommentsList(comments);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [article_id]);

  if (isLoading) return <p>loading...</p>;
  return (
    <Paper className="single-article-paper" elevation={24} square={false}>
      {commentsList.map(({ author, body, comment_id, created_at, votes }) => {
        return (
          <Card
            key={comment_id}
            className="single-article-paper"
            elevation={8}
            square={false}
          >
            <h3>{author}</h3>
            <p>{body}</p>
            <ul className="comment-details">
              <li>{new Date(created_at).toUTCString()}</li>
              <li>{`Votes: ${votes}`}</li>
            </ul>
          </Card>
        );
      })}
    </Paper>
  );
}
