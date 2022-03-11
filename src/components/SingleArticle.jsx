import * as api from '../utils/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Votes from './Votes';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import ErrorPage from './ErrorPage';

export default function SingleArticle() {
  const [article, setArticle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [numOfComments, setNumOfComments] = useState(''); //Updated when POST request is successful and then triggers useEffect in CommentList
  const [user, setUser] = useState({ username: 'grumpy19' });
  const { article_id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticleById(article_id)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response);
      });
  }, [article_id]);

  if (isLoading) return <CircularProgress />;
  if (error) return <ErrorPage error={error} />;
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
      <CommentForm
        setNumOfComments={setNumOfComments}
        article_id={article_id}
        user={user}
      />
      <CommentList
        numOfComments={numOfComments}
        article_id={article_id}
        user={user}
      />
    </section>
  );
}
