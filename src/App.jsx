import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header/Header';
import UsersPage from './pages/UsersPage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import UserPage from './pages/UserPage';
import TagPage from './pages/TagPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId" element={<UserPage />} />

        <Route path="/posts" element={<BlogPage />} />
        <Route path="/posts/:postId" element={<PostPage />} />
        <Route path="/posts/tag/:tagName" element={<TagPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* footer */}
    </BrowserRouter>
  );
}

export default App;
