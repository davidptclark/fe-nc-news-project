import axios from 'axios';

const marketApi = axios.create({
  baseURL: 'https://davidc-nc-news.herokuapp.com/api',
});

export const getArticles = (topic) => {
  return marketApi
    .get(`/articles`, { params: { topic: topic } }) //using passed param directly into axios
    .then(({ data: articles }) => articles);
};

export const getArticleById = (article_id) => {
  return marketApi
    .get(`/articles/${article_id}`)
    .then(({ data: article }) => article);
};

export const getTopics = () => {
  return marketApi.get(`/topics`).then(({ data }) => data);
};

export const patchVotes = (article_id, voteChange) => {
  return marketApi.patch(`/articles/${article_id}`, { inc_votes: voteChange });
};
