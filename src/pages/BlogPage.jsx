import { useState } from 'react';
import Pagination from '../components/Pagination/Pagination';
import PostsList from '../components/PostsList/PostsList';
import CONSTANTS from '../constants';

const BlogPage = () => {
  const [page, setPage] = useState(1);
  const limitPosts = CONSTANTS.LIMITS_POSTS.at(2);
  const skip = (page - 1) * limitPosts;
  return (
    <div>
      <h1>Blog</h1>
      {/* with images */}
      <PostsList withPic limit={limitPosts} skip={skip} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default BlogPage;
