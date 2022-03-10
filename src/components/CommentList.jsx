import * as React from 'react';
import * as api from '../api';
import { useEffect, useState } from 'react';
import CommentListItem from './CommentListItem';

export default function CommentsList({ article_id }) {
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.getCommentsById(article_id).then((comments) => {
      setCommentList(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>loading...</p>;
  return (
    <Paper className="single-article-paper" elevation={24} square={false}>
      {commentList.map((comment) => {
        <CommentListItem comment={comment} />;
      })}
    </Paper>
  );
}
