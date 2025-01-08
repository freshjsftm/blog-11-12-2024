import { Link } from 'react-router-dom';
import PostsList from '../components/PostsList/PostsList';
import UsersList from '../components/UsersList/UsersList';
import CONSTANTS from '../constants';
import styles from './pages.module.scss';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <section>
        <div className={styles['section-header']}>
          <h2>All posts</h2>
          <Link to="/posts">view all</Link>
        </div>
        {/* without images */}
        <PostsList limit={CONSTANTS.LIMITS_POSTS.at(1)} />
      </section>
      <section>
        <h2>List of authors</h2>
        <UsersList />
      </section>
    </div>
  );
};

export default HomePage;
