import * as api from '../utils/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import ArticleCards from './ArticleCards';
import SortLinks from './SortLinks';
import OrderLinks from './OrderLinks';
import ErrorPage from './ErrorPage';

export default function ArticleList() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState('created_at'); // default: date
  const [orderBy, setOrderBy] = useState('desc'); // default: (desc)
  const [error, setError] = useState(null);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles(topic, sortBy, orderBy)
      .then((articles) => {
        setError(null);
        setArticleList(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response);
      });
  }, [topic, sortBy, orderBy]);

  if (isLoading) return <CircularProgress />;
  if (error) return <ErrorPage error={error} />;
  return (
    <main>
      <SortLinks sortBy={sortBy} setSortBy={setSortBy} />
      <OrderLinks orderBy={orderBy} setOrderBy={setOrderBy} />
      <section className="article-list">
        {articleList.map((article) => {
          return <ArticleCards key={article.article_id} article={article} />;
        })}
      </section>
    </main>
  );
}
