import * as React from 'react';
import * as api from '../api';
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import CommentListItem from './CommentListItem';

export default function CommentList({ article_id }) {
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    api.getCommentsById(article_id).then((comments) => {
      if (isMounted) {
        setCommentList(comments);
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
      {commentList.map((comment) => {
        return <CommentListItem key={comment.comment_id} comment={comment} />;
      })}
    </Paper>
  );
}
