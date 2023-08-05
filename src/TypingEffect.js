import React, { useState, useEffect } from 'react';

function TypingEffect({ words }) {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let typingTimeout;

    const typeWords = async () => {
      for (let i = 0; i < words.length; i++) {
        const word = words[i];

        for (let j = 0; j < word.length; j++) {
          await new Promise(resolve => {
            typingTimeout = setTimeout(() => {
              setTypedText(prevTypedText => prevTypedText + word[j]);
              resolve();
            }, j * 50); // Delay each letter by 100ms
          });
        }

        if (i < words.length - 1) {
          await new Promise(resolve => setTimeout(resolve, word.length * 100 + 500)); // Pause between words
        }
      }
    };

    typeWords();

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [words]);

  return (
    <div className="typed-container">
      {typedText}
    </div>
  );
}

export default TypingEffect;
