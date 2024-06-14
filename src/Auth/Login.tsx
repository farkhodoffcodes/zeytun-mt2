// import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  number: string | number;
  password: string;
  role?: string;
}

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const user: User = {
    number: '9988890037',
    password: '12345'
  };
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  const navigate = useNavigate();
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (phoneNumber === user.number && password === user.password) {
      navigate("/");
    }
    else alert('Nmadur xato bor');

  };

  return (
    <div className='dark:bg-gray-900 h-100%'>
      <section className="bg-gray-50 dark:bg-gray-900 h-100%">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <p className='flex items-center mb-6 text-5xl font-semibold text-black dark:text-white'>
            Kirish
          </p>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Добро пожаловать!
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="numberInp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number</label>
                  <input
                    type="text"
                    id="numberInp"
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder="998"
                    value={phoneNumber}
                    onChange={handleNumberChange}
                  />
                  <span className='text-slate-500'>Iltimos raqam 998 bilan boshlansin</span>
                </div>
                <div className='py-4'>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input
                    type="password"
                    id="password"
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder="••••••••"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <span className='text-slate-500'>4 tadan koproq malumot kiriting</span>
                </div>
                <button type="submit" className="w-full bg-slate-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
