import { useForm } from 'react-hook-form';
import { login } from '../../../assets/allImg';
import { useNavigate } from 'react-router-dom';
import { SlSocialGoogle } from 'react-icons/sl';

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    // Email Password Login

    console.log(email, password);
  };

  const handleGoogleLogin = () => {
    //  Google Login
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row max-w-7xl h-screen items-center mx-auto">
      <div className="w-1/2">
        <img src={login} className="h-full w-full" alt="" />
      </div>
      <div className="w-1/2 grid place-items-center">
        <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-10">
          <h1 className="mb-10 font-medium text-2xl">Login</h1>
          <form className="space-y-3 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-start">
              <label htmlFor="email">Email</label>
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
            <div className="relative !mt-8">
              <button
                type="submit"
                className="bg-primary w-full text-white py-3 uppercase rounded-sm"
              >
                Login
              </button>
            </div>
            <div>
              <p>
                Don&apos;t have an account?{' '}
                <span
                  className="text-primary hover:underline cursor-pointer"
                  onClick={() => navigate('/signup')}
                >
                  Sign up
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

export default SignIn;
