import * as api from '../api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';

export default function SingleArticle() {
  const [article, setArticle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.getArticleById(article_id).then(({ article }) => setArticle(article));
    setIsLoading(false);
  }, [article_id]);

  if (isLoading) return <p>loading...</p>;
  return (
    <Card className="single-article-card" elevation={3}>
      <h3>article.title</h3>
      {/* Adding MUI Card styling */}
      <h4>By: {article.author} </h4>
      <p>{article.body}</p>
      <ul className="card-info">
        <li>Comments: {article.comment_count} </li>
        <li>Posted: {article.created_at} </li>
        <li>Topic: {article.topic}</li>
        <li>Votes: {article.votes}</li>
      </ul>
    </Card>
  );
}
