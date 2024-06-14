import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type User = {
  id: string | number;
  Firstname: string;
  singUp: {
    number: string | number;
    password: string;
  };
};

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [lang, setLang] = useState(true); // true for English, false for Russian

  const users: User[] = [
    {
      id: '1',
      Firstname: 'John',
      singUp: {
        number: '9988890037',
        password: '12345'
      },
    },
    {
      id: '2',
      Firstname: 'Jane',
      singUp: {
        number: '9988890038',
        password: '67890'
      },
    },
    {
      id: '3',
      Firstname: 'Doe',
      singUp: {
        number: '9988890039',
        password: '54321'
      },
    },
  ];

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const navigate = useNavigate();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validUser = users.find(user => user.singUp.number === phoneNumber && user.singUp.password === password);
    const validPassword = users.find(user => user.singUp.password !== password);
    const validNumber = users.find(user => user.singUp.number !== phoneNumber);
    if (validUser) {
      navigate("/")
    } else if (validNumber) {
      alert("Invalid number");
    } else if (validPassword) {
      alert("Invalid password");
    } else {
      alert("Invalid credentials");
    }
  };

  const ChangeLang: any = lang ? {
    title: 'Welcome!',
    labelPass: 'Password',
    labelNUm: 'Number',
    PassSpan: 'Enter more than 4 characters',
    ButtonText: 'Submit',
  } : {
    title: 'Добро пожаловать!',
    labelPass: 'Пароль',
    labelNUm: 'Номер',
    PassSpan: 'Введите более 4 символов',
    ButtonText: 'Отправить',
  };



  return (
    <div className='dark:bg-gray-900 h-100%'>
      <div className="absolute top-1 left-1">
        <button id='eng' onClick={() => setLang(true)} className={lang == true ? 'text-gray-900' : ' text-gray-500'}> Eng</button> / <button id='ru' onClick={() => setLang(false)} className={lang == false ? 'text-gray-900' : ' text-gray-500'}> Ru</button>
      </div>
      <section className="bg-gray-50 dark:bg-gray-900 h-100%">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <p className='flex items-center mb-6 text-5xl font-semibold text-orange-400'>
            ZEYTUN
          </p>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {ChangeLang.title}
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="numberInp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{ChangeLang.labelNUm}</label>
                  <input
                    type="text"
                    id="numberInp"
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder="998"
                    value={phoneNumber}
                    onChange={handleNumberChange}
                  />
                  <span className='text-slate-500'>998</span>
                </div>
                <div className='py-4'>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{ChangeLang.labelPass}</label>
                  <input
                    type="password"
                    id="password"
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder="••••••••"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <span className='text-slate-500'>{ChangeLang.PassSpan}</span>
                </div>
                <button
                  type="submit"
                  className="w-56 bg-slate-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {ChangeLang.ButtonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
