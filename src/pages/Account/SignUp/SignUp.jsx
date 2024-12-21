import { useEffect, useState } from 'react';
import { login } from '../../../assets/allImg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm, useWatch } from 'react-hook-form';
import { SlSocialGoogle } from 'react-icons/sl';
import { createUserWithEmailPass } from '../../../redux/feature/user/userSlice';

const SignUp = () => {
  const { handleSubmit, register, control, reset } = useForm();
  const password = useWatch({ control, name: 'password' });
  const confirmPassword = useWatch({ control, name: 'confirmPassword' });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      password !== undefined &&
      password !== '' &&
      confirmPassword !== undefined &&
      confirmPassword !== '' &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  const onSubmit = ({ email, password, name }) => {
    // Email Password signup
    dispatch(createUserWithEmailPass({ email, password, name }));
    navigate('/shop');
    reset();
    console.log(name, email, password);
  };

  const handleGoogleLogin = () => {
    // Google Login
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row max-w-7xl mx-auto h-screen items-center ">
      <div className="w-1/2">
        <img src={login} className="h-full w-full" alt="" />
      </div>
      <div className="w-1/2  grid place-items-center">
        <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-10">
          <h1 className="mb-10 font-medium text-2xl">Sign up</h1>
          <form className="space-y-5 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-start">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md"
                placeholder="Enter your name"
                {...register('name')}
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md"
                placeholder="Enter your E-mail"
                {...register('email')}
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full rounded-md"
                placeholder="Enter password"
                {...register('password')}
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="w-full rounded-md"
                placeholder="Re-enter same password"
                {...register('confirmPassword')}
              />
            </div>
            <div className="!mt-8 ">
              <button
                type="submit"
                className="bg-primary w-full text-white py-3 uppercase rounded-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={disabled}
              >
                Sign up
              </button>
            </div>
            <div>
              <p>
                Already have an account?{' '}
                <span
                  className="text-primary hover:underline cursor-pointer"
                  onClick={() => navigate('/signin')}
                >
                  Login
                </span>
              </p>
            </div>
            <button
              type="button"
              className="bg-primary w-full text-white py-3 uppercase rounded-sm flex items-center justify-center gap-2"
              onClick={handleGoogleLogin}
            >
              Login with Google
              <SlSocialGoogle className="text-xl" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
