import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';

export default function CommentListItem({
  author,
  body,
  comment_id,
  created_at,
  votes,
}) {
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
}
