import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ArticleCards({
  article: {
    article_id,
    author,
    comment_count,
    created_at,
    title,
    topic,
    votes,
    body,
  }, //Destructure values from article object
}) {
  return (
    <Link to={`/articles/${article_id}`} style={{ textDecoration: 'none' }}>
      <CardActionArea>
        <Card className="article-cards" elevation={3}>
          {/* Adding MUI card styling */}
          <h3>{title}</h3>
          <h4>By: {author} </h4>
          <p>{body.slice(0, 50)}...</p>
          <section className="votes">Votes: {votes}</section>
          <ul className="card-info">
            <li>Comments: {comment_count} </li>
            <li>Posted: {created_at.slice(0, -14)} </li>
            <li>Topic: {topic}</li>
          </ul>
        </Card>
      </CardActionArea>
    </Link>
  );
}
