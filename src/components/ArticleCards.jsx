import Card from "@mui/material/Card";
import * as moment from "moment";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

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
  },
}) {
  return (
    <Link to={`/articles/${article_id}`} style={{ textDecoration: "none" }}>
      <CardActionArea>
        <Card className="article-cards" elevation={3}>
          <h3>{title}</h3>
          <h4>{author}</h4>
          <p>{body.slice(0, 50)}...</p>
          <section className="votes">Votes: {votes}</section>
          <ul className="card-info">
            <li>Comments: {comment_count} </li>
            <li>Posted: {moment(created_at).format("Do MMMM YYYY")}</li>
            <li>Topic: {topic}</li>
          </ul>
        </Card>
      </CardActionArea>
    </Link>
  );
}
