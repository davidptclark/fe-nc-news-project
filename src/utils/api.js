import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://davidc-nc-news.herokuapp.com/api',
});

export const getArticles = (topic, sortBy, orderBy) => {
  return newsApi
    .get(`/articles`, {
      params: { topic: topic, sort_by: sortBy, order: orderBy },
    }) //using passed param directly into axios
    .then(({ data: articles }) => articles);
};

export const getArticleById = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then(({ data: article }) => article);
};

export const getTopics = () => {
  return newsApi.get(`/topics`).then(({ data }) => data);
};

export const patchVotes = (article_id, voteChange) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: voteChange });
};

export const getCommentsById = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => data);
};

export const postCommentsById = (article_id, postDetails) => {
  return newsApi.post(`/articles/${article_id}/comments`, postDetails).then(
    ({
      data: {
        comment: { comment_id },
      },
    }) => comment_id
  );
};

export const deleteCommentById = (comment_id) => {
  return newsApi
    .delete(`/comments/${comment_id}`, comment_id)
    .then((res) => console.log(res));
};
