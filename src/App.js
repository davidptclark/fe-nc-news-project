import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import ArticleList from './components/Article-list';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArticleList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
