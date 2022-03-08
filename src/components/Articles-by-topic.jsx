import * as api from '../api';
import { useEffect, useState } from 'react';

import ArticleCards from './Article-cards';

export default function ArticlesByTopic() {
  const [articlesByTopic, setArticlesByTopic] = useState([]);

  useEffect(() => {
    api.getArticles().then((articles) => setArticlesByTopic(articles));
  }, []);

  return (
    <main className="article-list">
      {articlesByTopic.map((article) => {
        return <ArticleCards key={article.article_id} article={article} />;
      })}
    </main>
  );
}
