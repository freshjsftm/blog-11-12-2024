import { useState } from 'react';
import Pagination from '../components/Pagination/Pagination';
import PostsList from '../components/PostsList/PostsList';
import CONSTANTS from '../constants';
import FeaturedPost from '../components/FeaturedPost/FeaturedPost';
import styles from './pages.module.scss';

const BlogPage = () => {
  const [page, setPage] = useState(1);
  const limitPosts = CONSTANTS.LIMITS_POSTS.at(2);
  const skip = (page - 1) * limitPosts;
  return (
    <>
      <section>
        <FeaturedPost imgPosition='right'/>
      </section>
      <div className={styles.wrapper}>
        <h1>Blog</h1>
        {/* with images */}
        <PostsList withPic limit={limitPosts} skip={skip} />
        <Pagination page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default BlogPage;
