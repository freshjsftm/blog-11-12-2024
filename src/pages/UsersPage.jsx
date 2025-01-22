import { useState } from 'react';
import UsersList from '../components/UsersList/UsersList';
import styles from './pages.module.scss';
import Limit from '../components/Limit/Limit';
import CONSTANTS from '../constants';
import Pagination from '../components/Pagination/Pagination';
import { useSelector } from 'react-redux';

const UsersPage = () => {
  const limits = CONSTANTS.LIMITS;
  const [limitUsers, setLimitUsers] = useState(limits.at(0));
  const [page, setPage] = useState(1);
  const changeLimitUsers = (event) => {
    setLimitUsers(Number(event.target.value));
    setPage(1);
  };
  const skip = (page - 1) * limitUsers;
  const {total} = useSelector((state)=>state.users);
  return (
    <div className={styles.wrapper}>
      <h1>Autors</h1>
      <Limit limit={limitUsers} changeLimit={changeLimitUsers} />
      <UsersList limit={limitUsers} skip={skip} />
      <Pagination page={page} setPage={setPage} limit={limitUsers} total={total}/>
    </div>
  );
};

export default UsersPage;
