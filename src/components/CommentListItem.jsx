import Card from '@mui/material/Card';

export default function CommentListItem({
  comment: { author, body, created_at, votes },
}) {
  return (
    <Card className="single-article-paper" elevation={8} square={false}>
      <h3>{author}</h3>
      <p>{body}</p>
      <ul className="comment-details">
        <li>{new Date(created_at).toUTCString()}</li>
        <li>{`Votes: ${votes}`}</li>
      </ul>
    </Card>
  );
}
