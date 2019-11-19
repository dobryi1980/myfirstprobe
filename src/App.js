import React from 'react';
import './App.css';
/*import Footer from './Footer';*/
import Header from './Header';
import Navigation from './Navigation';
import Profile from './Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <Profile />    
    </div>
  );
}

export default App;
