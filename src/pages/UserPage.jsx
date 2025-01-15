import PostListByUser from '../components/PostsList/PostListByUser';
import UserProfile from '../components/UserProfile/UserProfile';
import styles from './pages.module.scss';

const UserPage = () => {
  return (
    <div className={styles.wrapper}>
      <UserProfile />
      <h2>My posts</h2>
      <PostListByUser />
    </div>
  );
};

export default UserPage;
