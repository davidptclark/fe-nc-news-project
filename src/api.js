import axios from 'axios';

const marketApi = axios.create({
  baseURL: 'https://davidc-nc-news.herokuapp.com/api',
});

export const getArticles = (topic) => {
  return marketApi
    .get(`/articles`, { params: { topic: topic } }) //using passed param directly into axios
    .then(({ data: articles }) => articles);
};

export const getTopics = () => {
  return marketApi.get(`/topics`).then(({ data }) => data);
};
