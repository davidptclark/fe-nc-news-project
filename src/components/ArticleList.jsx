import * as api from '../utils/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import ArticleCards from './ArticleCards';
import SortLinks from './SortLinks';
import OrderLinks from './OrderLinks';

export default function ArticleList() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState('created_at'); // default: date
  const [orderBy, setOrderBy] = useState('desc'); // default: (desc)
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.getArticles(topic, sortBy, orderBy).then((articles) => {
      setArticleList(articles);
      setIsLoading(false);
    });
  }, [topic, sortBy, orderBy]);

  if (isLoading) return <CircularProgress />;
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
