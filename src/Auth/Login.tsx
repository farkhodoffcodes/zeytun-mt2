import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier, ConfirmationResult } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCc8Uy5vYC_datEFEySzQE66_1VPhimFaM',
  authDomain: 'zetrun-mt2.firebaseapp.com',
  projectId: 'zetrun-mt2',
  storageBucket: 'zetrun-mt2.appspot.com',
  messagingSenderId: '756798973431',
  appId: '1:756798973431:web:dcf7929f744804bcbcbaf2',
  measurementId: 'G-QKCJXYJG42',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const LoginPage: React.FC = () => {
  const [lang, setLang] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState<string>('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  useEffect(() => {
    (window as any).recaptchaVerifier = new RecaptchaVerifier(
      'RecaptchaVerifier',
      {
        size: 'invisible',
        callback: (response: any) => {
          console.log("Recaptcha resolved", response);
        },
      },
      auth
    );
  }, []);

  const ChangeLang = lang
    ? {
      title: 'Welcome!',
      labelNum: 'Number',
      codeSpan: 'Enter the verification code',
      sendCodeText: 'Send Code',
      verifyText: 'Verify Code',
    }
    : {
      title: 'Добро пожаловать!',
      labelNum: 'Номер',
      codeSpan: 'Введите код подтверждения',
      sendCodeText: 'Отправить код',
      verifyText: 'Проверить код',
    };

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  };

  const handleSendCode = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullPhoneNumber = `+998${phoneNumber}`;

    const appVerifier = (window as any).recaptchaVerifier;
    signInWithPhoneNumber(auth, fullPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
        console.log('SMS sent');
        (window as any).confirmationResult = confirmationResult; // Save the confirmation result to window object
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error sending SMS:', error);
      });
  };

  const handleVerifyCode = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    confirmationResult?.confirm(verificationCode)
      .then((result) => {
        const user = result.user;
        console.log('User signed in:', user);
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error verifying code:', error);
      });
  };

  return (
    <div className='dark:bg-gray-900 h-100%'>
      <div className='absolute top-1 left-1'>
        <button
          id='eng'
          onClick={() => setLang(true)}
          className={lang ? 'text-gray-900' : 'text-gray-500'}
        >
          Eng
        </button>{' '}
        /{' '}
        <button
          id='ru'
          onClick={() => setLang(false)}
          className={!lang ? 'text-gray-900' : 'text-gray-500'}
        >
          Ru
        </button>
      </div>
      <section className='bg-gray-50 dark:bg-gray-900 h-100%'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <p className='flex items-center mb-6 text-5xl font-semibold text-orange-400'>
            ZEYTUN
          </p>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                {ChangeLang.title}
              </h1>
              {error && <p className='text-red-500'>{error}</p>}
              <form className='space-y-4 md:space-y-6' onSubmit={confirmationResult ? handleVerifyCode : handleSendCode}>
                <div>
                  <label
                    htmlFor='numberInp'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    {ChangeLang.labelNum}
                  </label>
                  <input
                    type='text'
                    id='numberInp'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='998'
                    value={phoneNumber}
                    onChange={handleNumberChange}
                  />
                  <span className='text-slate-500'>998</span>
                </div>
                {confirmationResult && (
                  <div className='py-4'>
                    <label
                      htmlFor='verificationCode'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      {ChangeLang.codeSpan}
                    </label>
                    <input
                      type='text'
                      id='verificationCode'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='123456'
                      value={verificationCode}
                      onChange={handleCodeChange}
                      required
                    />
                  </div>
                )}
                <button
                  type='submit'
                  className='w-56 bg-slate-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  {confirmationResult ? ChangeLang.verifyText : ChangeLang.sendCodeText}
                </button>
              </form>
              <div id='recaptcha-container'></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
