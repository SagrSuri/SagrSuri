/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ texts, typingSpeed = 100, deletingSpeed = 50, delay = 1000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing effect
        if (index < currentText.length) {
          setDisplayText(currentText.slice(0, index + 1));
          setIndex((prev) => prev + 1);
        } else {
          // Pause before starting to delete
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting effect
        if (index > 0) {
          setDisplayText(currentText.slice(0, index - 1));
          setIndex((prev) => prev - 1);
        } else {
          // Move to the next text after deleting
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [index, isDeleting, texts, textIndex, typingSpeed, deletingSpeed, delay]);

  return (
    <span className="gradient-text xm:text-[20px] lg:text-4xl xl:text-4xl sm:text-xl md:text-xl">
      {displayText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default TypingAnimation;
