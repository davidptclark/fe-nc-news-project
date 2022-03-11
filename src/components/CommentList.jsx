import * as React from 'react';
import * as api from '../utils/api';
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import CommentListItem from './CommentListItem';
import CircularProgress from '@mui/material/CircularProgress';
import DeletePrompt from './DeletePrompt';

export default function CommentList({ article_id, numOfComments, user }) {
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(null); //To conditionally render the alert prompts based on delete outcome
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    api.getCommentsById(article_id).then((comments) => {
      if (isMounted) {
        let sortedComments = comments.sort(
          (a, b) => b.comment_id - a.comment_id
        ); //Returns to CommentList in order which will render with new comments at the top
        setCommentList(sortedComments);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [article_id, numOfComments, deleteStatus]);

  if (isLoading) return <CircularProgress />;
  return (
    <Paper className="single-article-paper" elevation={24} square={false}>
      {deleteStatus ? (
        <DeletePrompt
          deleteStatus={deleteStatus}
          setDeleteStatus={setDeleteStatus}
        />
      ) : null}
      {/* Display prompt at the top of the comments list after re-render */}
      {commentList.map((comment) => {
        return (
          <CommentListItem
            key={comment.comment_id}
            comment={comment}
            user={user}
            deleteStatus={deleteStatus}
            setDeleteStatus={setDeleteStatus}
          />
        );
      })}
    </Paper>
  );
}
