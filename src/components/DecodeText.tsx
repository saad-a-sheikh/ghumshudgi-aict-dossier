import React, { useState, useEffect, useCallback } from 'react';

interface DecodeTextProps {
  text: string;
  trigger?: boolean;
  className?: string;
  speed?: number;
}

const CIPHER_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&/[]*=-_';

export const DecodeText: React.FC<DecodeTextProps> = ({
  text,
  trigger = false,
  className = '',
  speed = 24,
}) => {
  const [displayText, setDisplayText] = useState(text);

  const runDecode = useCallback(() => {
    let iteration = 0;
    const interval = window.setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        window.clearInterval(interval);
      }
      iteration += 1 / 2;
    }, speed);

    return () => window.clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    if (trigger) {
      return runDecode();
    } else {
      setDisplayText(text);
    }
  }, [trigger, text, runDecode]);

  return (
    <span onMouseEnter={runDecode} className={className}>
      {displayText}
    </span>
  );
};
