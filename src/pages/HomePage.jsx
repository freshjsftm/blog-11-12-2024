import UsersList from '../components/UsersList/UsersList';
import styles from './pages.module.scss';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <h2>List of authors</h2>
      <UsersList />
    </div>
  );
};

export default HomePage;
