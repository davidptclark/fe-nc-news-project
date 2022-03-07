import * as api from '../api';
import { useEffect, useState } from 'react';
import ArticleCards from './Article-cards';

export default function ArticleList() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    api.getArticles().then((articles) => setArticleList(articles));
  }, []);

  return (
    <main className="article-list">
      {articleList.map((article) => {
        return <ArticleCards key={article.article_id} article={article} />;
      })}
    </main>
  );
}
