import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Spinner from '../Spinner/Spinner';
import { getAllUsersAsync } from '../../store/usersSlice';
import UserCard from './UserCard';
import styles from './Users.module.scss';

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, error, isPending } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, [dispatch]);
  const showUser = (user) => <UserCard key={user.id} user={user} />;
  if (error) {
    return <p>{error}</p>;
  }
  if (isPending) {
    return <p>loading</p>
    //return <Spinner />;
  }
  return users.length === 0 ? (
    <p>list users empty</p>
  ) : (
    <section className={styles['users-list']}>{users.map(showUser)}</section>
  );
};

export default UsersList;
