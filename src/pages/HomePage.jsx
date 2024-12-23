import UsersList from '../components/UsersList/UsersList';
import styles from './pages.module.scss';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>home page</h1>
      <UsersList />
    </div>
  );
};

export default HomePage;
