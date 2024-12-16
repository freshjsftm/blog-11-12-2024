import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js';
import { loginUserAuth } from '../../store/userSlice';
import styles from './LoginForm.module.scss';
import Icon from '@mdi/react';

const LoginForm = (props) => {
  const { closeModal } = props;
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(loginUserAuth(values));
    closeModal();
  };
  const changeShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Formik
      initialValues={{ username: 'emilys', password: 'emilyspass' }}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <Form className={styles.form}>
            <label>
              <span>username</span>
              <Field name="username" />
              <ErrorMessage name="username" />
            </label>
            <label className={styles.password}>
              <span>password</span>
              <Field
                name="password"
                type={showPassword ? 'text' : 'password'}
              />
              <span onClick={changeShowPassword} className={styles.eye}>
                {showPassword ? (
                  <Icon size={1} path={mdiEyeOffOutline} />
                ) : (
                  <Icon size={1} path={mdiEyeOutline} />
                )}
              </span>
              <ErrorMessage name="password" />
            </label>
            <button type="submit">log in</button>
          </Form>
        );
      }}
    </Formik>
  );
};

LoginForm.propTypes = {
  closeModal: PropTypes.func,
};

export default LoginForm;
