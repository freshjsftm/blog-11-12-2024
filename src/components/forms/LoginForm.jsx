import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUserAuth } from '../../store/userSlice';

const LoginForm = (props) => {
  const {closeModal} = props;
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(loginUserAuth(values));
    closeModal();
  };
  return (
    <Formik
      initialValues={{ username: 'emilys', password: 'emilyspass' }}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <Form>
            <label>
              <span>username</span>
              <Field name="username" />
              <ErrorMessage name="username" />
            </label>
            <label>
              <span>password</span>
              <Field name="password" />
              <ErrorMessage name="password" />
            </label>
            <button type="submit">log in</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
