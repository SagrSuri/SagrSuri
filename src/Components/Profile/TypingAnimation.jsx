// TypingAnimation.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const TypingAnimation = ({ text, speed = 200 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      // eslint-disable-next-line react/prop-types
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else {
        setIndex(0);
        setDisplayText(``);
      }
    };
    const timer = setInterval(handleTyping, speed);
    return () => clearInterval(timer);
  }, [index, text, speed]);

  return <span className='gradient-text font-semibold lg:text-4xl xl:text-4xl sm:text-xl md:text-xl '>{displayText}</span>;
};

export default TypingAnimation;
