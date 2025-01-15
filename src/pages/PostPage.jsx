import PostDetails from '../components/PostDetails/PostDetails';
import styles from './pages.module.scss';

const PostPage = () => {
  return (
    <div  className={styles.wrapper}>
      <PostDetails />
    </div>
  );
};

export default PostPage;
