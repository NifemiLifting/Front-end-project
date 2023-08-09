
import React, { useState, useEffect } from 'react';

function TypingEffect({ words }) {
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (!isTypingComplete) {
      let typingTimeout;

      const typeWords = async () => {
        for (let i = 0; i < words.length; i++) {
          const word = words[i];

          for (let j = 0; j < word.length; j++) {
            await new Promise(resolve => {
              typingTimeout = setTimeout(() => {
                setTypedText(prevTypedText => prevTypedText + word[j]);
                resolve();
              }, j * 50); // Delay each letter by 50ms
            });
          }

          if (i < words.length - 1) {
            await new Promise(resolve => setTimeout(resolve, word.length * 50 + 500)); // Pause between words
          }
        }

        setIsTypingComplete(true); // Set typing as complete after loop completion
      };

      typeWords();

      return () => {
        clearTimeout(typingTimeout);
      };
    }
  }, [isTypingComplete]);

  return (
    <div className="typed-container">
      {typedText}
    </div>
  );
}

export default TypingEffect;

