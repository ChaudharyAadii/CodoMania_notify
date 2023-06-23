import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [mode, setMode] = useState('Dark');

  const [isScrolledUp, setIsScrolledUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolledUp(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'rgb(23, 19, 19)';
      document.body.style.color = 'white';
      document.getElementById('dark').innerText = 'Light';
      document.getElementById('pppp').style.color = '#0d4b68';
      // document.getElementById('dark').style.backgroundColor = 'black';
      // document.getElementById('dark').style.color = 'white';
      // document.getElementById('dark').style.borderColor = 'red';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(101, 169, 198)';
      document.body.style.color = 'black';
      document.getElementById('dark').innerText = '@';
      document.getElementById('pppp').style.color = 'black';
      // document.getElementById('dark').style.backgroundColor = 'white';
      // document.getElementById('dark').style.color = 'black';
      // document.getElementById('dark').style.borderColor = '#010b1a';
    }
  }

  return (
    <nav id='navbar' className={isScrolledUp ? 'scrolled-up' : ''}>
      <h1>CodoMania Notify</h1>
      {/* <ul> */}
      {/* <label htmlFor="">Mujhe dark krro</label> */}
      <p id='pppp'><b>D</b><button onClick={handleChange} id='dark'>@</button><b>rk</b></p>
      {/* </ul> */}
    </nav>
  )
}
