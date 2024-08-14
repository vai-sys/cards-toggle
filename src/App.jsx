



import React, { useState } from 'react';
import BookCard from './components/BookCard';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const books = [
    {
      title: 'The Quantum Paradox',
      genre: 'Science Fiction',
      description: 'As Dr. Elara stepped through the shimmering portal, she knew there was no turning back. The fate of two universes now rested in her hands...',
      imgSrc: 'https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/paradox.png'
    },
    {
      title: 'Whispers in the Mist',
      genre: 'Mystery',
      description: 'The old lighthouse stood silent, its beacon long extinguished. But on foggy nights, some swore they could still see its ghostly light...',
      imgSrc: 'https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/mist.png'
    },
    {
      title: 'Echoes of Eternity',
      genre: 'Fantasy',
      description: 'The ancient prophecy spoke of a child born with starlight in their eyes. As the comet blazed overhead, the kingdom held its breath...',
      imgSrc: 'https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/ecos.png'
    }
  ];

  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-dark-500' : 'bg-customPurple'
      } text-${theme === 'dark' ? 'white-300' : 'white'} min-h-screen p-8 relative`}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${
              theme === 'dark' ? 'bg-gray-400' : 'bg-white'
            } rounded-full`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          ></div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto relative z-10 mt-20 text-center">
        <h1
          className={`text-2xl font-bold ${
            theme === 'dark' ? 'text-white-300' : 'text-white'
          } mb-4`}
        >
          Sample Books Generated by BookAI
        </h1>
        <p
          className={`text-xl ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-300'
          } mb-16`}
        >
          Explore some of the captivating books created using our AI technology.
        </p>
        <div className="flex flex-wrap justify-around relative">
          {books.map((book, index) => (
            <BookCard key={index} {...book} theme={theme} />
          ))}
        </div>
        <button
  onClick={toggleTheme}
  className={[
    'text-sm',
    'absolute',
    'top-2',
    'right-2',
    'pr-4',
    'pl-4',
    'pt-2',
    'pb-3',
    theme === 'dark' ? 'bg-slate-800 text-white hover:text-gray-500' : 'bg-purple-950 text-white hover:text-gray-900',
  ].join(' ')}
>
  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
</button>
      </div>
    </div>
  );
};

export default App;