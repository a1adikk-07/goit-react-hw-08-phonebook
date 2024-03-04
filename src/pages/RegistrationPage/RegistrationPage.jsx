import { useSelector, useDispatch } from 'react-redux';

import RegisterForm from '../../components/RegisterForm/RegisterForm';

import { signup } from '../../redux/auth/auth-operations';

import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <main>
      {authLoading && <p>One second...</p>}
      <RegisterForm onSubmit={handleSignup} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </main>
  );
};

export default RegisterPage;
