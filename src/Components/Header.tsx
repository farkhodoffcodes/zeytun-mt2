import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>(() => {
    return sessionStorage.getItem('searchQuery') || '';
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [previousQueries, setPreviousQueries] = useState<string[]>(() => {
    return JSON.parse(sessionStorage.getItem('previousQueries') || '[]');
  });
  const [language, setLanguage] = useState<'uz' | 'ru'>('uz');

  useEffect(() => {
    sessionStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    sessionStorage.setItem('previousQueries', JSON.stringify(previousQueries));
  }, [previousQueries]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery && !previousQueries.includes(searchQuery)) {
      setPreviousQueries([searchQuery, ...previousQueries].slice(0, 5)); // Save only last 5 queries
    }
    setSearchQuery("");
    setSuggestions([]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      const filteredSuggestions = previousQueries.filter(q => q.toLowerCase().includes(query.toLowerCase()));
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (suggestion: string) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
  };

  const handleFocus = () => {
    if (searchQuery.length > 0) {
      const filteredSuggestions = previousQueries.filter(q => q.toLowerCase().includes(searchQuery.toLowerCase()));
      setSuggestions(filteredSuggestions);
    }
  };

  const handleLanguageChange = (lang: 'uz' | 'ru') => {
    setLanguage(lang);
  };

  return (
    <div>
      <nav className="container flex justify-between py-3 align-middle text-sm gap-12 px-12">
        <div className="flex align-middle items-center gap-2">
          <p className="text-yellow-300 text-3xl font-bold">ZAYTUN</p>
          <div className="flex items-center gap-1">
            <span 
              className={`cursor-pointer ${language === 'uz' ? 'text-gray-300' : ''}`} 
              onClick={() => handleLanguageChange('uz')}
            >
              uz
            </span>
            /
            <span 
              className={`cursor-pointer ${language === 'ru' ? 'text-gray-300' : ''}`} 
              onClick={() => handleLanguageChange('ru')}
            >
              rus
            </span>
          </div>
        </div>
        <form onSubmit={handleSearch} className="relative flex items-center">
          <input
            type="text"
            className={`rounded-md border pl-4 pr-20 py-2 input ${language === 'uz' ? 'border-gray-300 hover:border-gray-300 focus:border-gray-300 focus:ring-gray-300' : 'border-yellow-300 hover:border-yellow-300 focus:border-yellow-300 focus:ring-yellow-300'}`}
            placeholder="Что вы хотите найти"
            value={searchQuery}
            onChange={handleChange}
            onFocus={handleFocus}
            style={{ height: '40px', width: '500px' }}
          />
          <button
            type="submit"
            className={`absolute right-0 top-2.1 h-full rounded-r-md px-5 ${language === 'uz' ? 'bg-gray-300' : 'bg-yellow-300'}`}
            style={{ height: '40px' }}
          >
            Найти
          </button>
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-t-0 rounded-b-md shadow-lg z-10">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelect(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </form>
        <div className="flex gap-3 items-center justify-center">
          <button className={`rounded-full py-3 ${language === 'uz' ? 'bg-gray-300' : 'bg-yellow-300'}`}>
          <Link to="/Tanlanganlar">
              <i className="fa-regular fa-heart py-0 px-4"></i>
            </Link>
          </button>
          <p className="text-sm">
            Избранное 2 товара
          </p>
          <button className={`rounded-full px-3 py-3 ${language === 'uz' ? 'bg-gray-300' : 'bg-yellow-300'}`}>
            <svg className="" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.66675 1.66669H2.32099C2.79938 1.66669 3.03857 1.66669 3.23303 1.75343C3.40445 1.8299 3.5509 1.95307 3.6556 2.10885C3.77438 2.28557 3.81536 2.52123 3.89733 2.99254L4.07254 4.00002M4.07254 4.00002L4.49181 6.41078C4.67099 7.44106 4.76058 7.9562 5.02591 8.3273C5.25953 8.65405 5.58614 8.90289 5.96319 9.0414C6.39141 9.19871 6.91185 9.14834 7.95272 9.04761L13.4094 8.51955C13.5188 8.50896 13.5734 8.50367 13.6205 8.49684C14.5683 8.35936 15.2856 7.56929 15.3311 6.61268C15.3334 6.56515 15.3334 6.51022 15.3334 6.40035V6.40035C15.3334 6.28364 15.3334 6.22528 15.3309 6.17559C15.281 5.17178 14.4938 4.36097 13.4919 4.28132C13.4423 4.27737 13.384 4.27565 13.2673 4.27219L4.07254 4.00002Z" stroke="#171F26" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              <ellipse cx="6.66683" cy="12.6667" rx="1.33333" ry="1.33333" stroke="#171F26" stroke-width="1.8" />
              <ellipse cx="13.0001" cy="12.6667" rx="1.33333" ry="1.33333" stroke="#171F26" stroke-width="1.8" />
            </svg>
          </button>
          <p>Корзина 10 <span className="text-yellow-300">товар</span></p>
          <Link to={'/login'}>
            <button className={`rounded-full px-5 py-3 ml-10 ${language === 'uz' ? 'bg-gray-300' : 'bg-yellow-300'}`}>
              <i className="fa-solid fa-user"></i>
              <span className="ml-2">Login</span>
            </button>
          </Link>
        </div>
      </nav>
      <div className="flex align-center container px-20 py-4 text-sm justify-between">
        <a href="/category" className="gap-10">Каталог товаров</a>
        <a href="#" className="">Продукты</a>
        <a href="#" className="">Одежда и обувь</a>
        <a href="#" className="">Электроника</a>
        <a href="#" className="">Для дома</a>
        <a href="#" className="">Спорт</a>
        <a href="#" className="">Дети</a>
        <a href="#">Книги</a>
        <a href="#">Бренды</a>
        <a href="#">Зоо</a>
        <a href="#">Компьютеры</a>
        <a href="#">Здоровье</a>
        <a href="#">Ремонт</a>
      </div>
    </div>
  );
};

export default Header;
