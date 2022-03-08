import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container'; //Center root div horizontally

// Components
import Header from './components/Header';
import TopicLinks from './components/Topic-links';
import ArticleList from './components/Article-list';

function App() {
  return (
    <BrowserRouter>
      {/* IMPORTANT: This must be around the WHOLE div, otherwise the nav bar links will throw errors */}
      <div className="App">
        <Container maxWidth="md">
          <Header />
          <TopicLinks />
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/:topic" element={<ArticleList />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
