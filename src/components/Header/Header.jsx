import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '@mdi/react';
import { mdiLoginVariant, mdiLogoutVariant } from '@mdi/js';
import Menu from '../Menu/Menu';
import Modal from '../Modal/Modal';
import LoginForm from '../forms/LoginForm';
import { clearError, clearUser } from '../../store/userSlice';
import Spinner from '../Spinner/Spinner';

const Header = () => {
  const { user, error, isPending } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isShowModal, setIsShowModal] = useState(false);
  const handleLogin = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  const closeErrorModal = () => {
    dispatch(clearError());
  };
  const logoutUser = () => {
    dispatch(clearUser());
  };
  return (
    <header>
      <div>
        {isPending ? (
          <Spinner />
        ) : user ? (
          <p>
            Welcome, {user.username}
            <Icon size={1} path={mdiLogoutVariant} onClick={logoutUser} />
          </p>
        ) : (
          <Icon size={1} path={mdiLoginVariant} onClick={handleLogin} />
        )}
      </div>
      <Menu />
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <LoginForm closeModal={closeModal} />
        </Modal>
      )}

      {error && <Modal closeModal={closeErrorModal}>{error}</Modal>}
    </header>
  );
};

export default Header;
