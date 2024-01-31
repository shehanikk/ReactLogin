import React from 'react';
import './App.css';
import Tilt from 'react-parallax-tilt';
import welcomeImage from './assets/welcome.png';

function App() {
  return (
    <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
      <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
      <Tilt>
        <div className="container h-30-r w-20-r bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm flex flex-col items-center justify-center">
          <div className="w-60 mb-2">
            <img src={welcomeImage} alt="Welcome" className="w-full h-full object-contain" />
          </div>
          <form className='flex flex-col items-center justify-evenly'>
            <div className='text-white font-poppins text-1.5x1 tracking-widest mt-6'>Welcome to EZPARK</div>
            <input type="text" placeholder='username' className='input-text mb-2 mt-6' />
            <input type="password" placeholder='password' className='input-text mb-2 mt-6' />
            <input type="Submit" value="Login" className='cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 mt-6 mb-4 w-13-r' />
          </form>
        </div>
      </Tilt>
    </div>
  );
}

export default App;
