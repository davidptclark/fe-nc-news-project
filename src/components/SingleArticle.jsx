import * as api from '../api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';

import Votes from './Votes';
import CommentList from './CommentList';

export default function SingleArticle() {
  const [article, setArticle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.getArticleById(article_id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>loading...</p>;
  return (
    <section>
      <Card className="single-article-paper" elevation={24} square={false}>
        <h3>{article.title}</h3>
        {/* Adding MUI Card styling */}
        <h4>By: {article.author} </h4>
        <p>{article.body}</p>
        <Votes votes={article.votes} />
        <ul className="card-info">
          <li>Comments: {article.comment_count} </li>
          <li>Posted: {new Date(article.created_at).toUTCString()} </li>
          <li>Topic: {article.topic}</li>
        </ul>
      </Card>
      <CommentList article_id={article_id} />
    </section>
  );
}
