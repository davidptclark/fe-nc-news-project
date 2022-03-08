import Paper from '@mui/material/Paper';

export default function ArticleCards({
  article: { author, comment_count, created_at, title, topic, votes, body }, //Destructure values from article object
}) {
  return (
    <Paper className="article-cards" elevation={3}>
      {/* Adding MUI Paper styling */}
      <h3>{title}</h3>
      <h4>By: {author} </h4>
      <p>{body.slice(0, 50)}...</p>
      <ul className="card-info">
        <li>Comments: {comment_count} </li>
        <li>Posted: {created_at} </li>
        <li>Topic: {topic}</li>
        <li>Votes: {votes}</li>
      </ul>
    </Paper>
  );
}
