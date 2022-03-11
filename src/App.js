import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container'; //Center root div horizontally
// Components
import Header from './components/Header';
import TopicLinks from './components/TopicLinks';
import ArticleList from './components/ArticleList';
import SingleArticle from './components/SingleArticle';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      {/* IMPORTANT: This must be around the WHOLE div, otherwise the nav bar links will throw errors */}
      <div className="App">
        <Container maxWidth="md">
          <Header />
          <TopicLinks />
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<ArticleList />} />
            <Route path="/topics/:topic" element={<ArticleList />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
