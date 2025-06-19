import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-8 bottom-18 z-5 cursor-pointer rounded-full bg-blue-500 px-4 py-2 text-white shadow-lg hover:bg-blue-600"
    >
      ↑ Top
    </button>
  );
};

export default ScrollToTopButton;
