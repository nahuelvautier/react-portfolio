import { useEffect, useState } from 'react';
import './Scroll-Top-Button.css';

export default function ScrollTopButton () {
  const [scrollY, setScrollY] = useState(0);
  const scrollButton = document.querySelector('.scroll-btn');

  useEffect(() => {   
    const scrollDetect = () =>  setScrollY(document.documentElement.scrollTop);
    
    window.addEventListener('scroll', scrollDetect); 
    
    (scrollY > 900) ? scrollButton?.classList.remove('hidden') : scrollButton?.classList.add('hidden');

    return () => {
      window.removeEventListener('scroll', scrollDetect);
    };
  });

  const scrollHandler = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    });
  }

  return (
    <button
      className="scroll-btn  hidden"
      data-dark
      onClick={scrollHandler}
    >
      &#11014;
    </button>
  );
}