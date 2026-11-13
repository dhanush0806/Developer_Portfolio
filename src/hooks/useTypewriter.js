import { useState, useEffect, useRef } from 'react';

export const useTypewriter = (text, speed = 40, delay = 500) => {
  const [displayedText, setDisplayedText] = useState('');
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;

    const startTyping = setTimeout(() => {
      hasStarted.current = true;

      let i = 0;

      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
    }, delay);

    return () => clearTimeout(startTyping);
  }, []);

  return displayedText;
};