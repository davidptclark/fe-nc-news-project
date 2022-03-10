import * as api from '../utils/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import ArticleCards from './ArticleCards';

export default function ArticleList() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.getArticles(topic).then((articles) => {
      setArticleList(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <CircularProgress />;
  return (
    <main className="article-list">
      {articleList.map((article) => {
        return <ArticleCards key={article.article_id} article={article} />;
      })}
    </main>
  );
}
