import axios from 'axios';

const marketApi = axios.create({
  baseURL: 'https://davidc-nc-news.herokuapp.com/api',
});

export const getArticles = () => {
  return marketApi.get(`/articles`).then(({ data: articles }) => articles);
};
