export default function ArticleCards({
  article: { author, comment_count, created_at, title, topic, votes, body }, //Destructure values from article object
}) {
  return (
    <article className="article-cards">
      <h3>{title}</h3>
      <h4>By: {author} </h4>
      <p>{body}</p>
      <ul>
        <li>Number of comments: {comment_count} </li>
        <li>Posted: {created_at} </li>
        <li>Topic: {topic}</li>
        <li>Votes: {votes}</li>
      </ul>
    </article>
  );
}
