import { Link } from 'react-router-dom';
import PostsList from '../components/PostsList/PostsList';
import UsersList from '../components/UsersList/UsersList';
import CONSTANTS from '../constants';
import styles from './pages.module.scss';
import FeaturedPost from '../components/FeaturedPost/FeaturedPost';
import TagsList from '../components/TagsList/TagsList';

const HomePage = () => {
  return (
    <>
      <section className={styles.relative}>
        <FeaturedPost imgPosition="under" />
      </section>
      <div className={styles.wrapper}>
        <section className={styles['section-posts']}>
          <div className={styles['featured-post']}>
            <h2>Featured Post</h2>
            <FeaturedPost imgPosition="over" />
          </div>
          <div  className={styles['all-post']}>
            <div className={styles['section-header']}>
              <h2>All posts</h2>
              <Link to="/posts">view all</Link>
            </div>
            {/* without images */}
            <PostsList limit={CONSTANTS.LIMITS_POSTS.at(1)} />
          </div>
        </section>
        <section>
          <h2>List of authors</h2>
          <UsersList />
        </section>
        <section>
          <h2>Choose a tag</h2>
          <TagsList />
        </section>
      </div>
    </>
  );
};

export default HomePage;
