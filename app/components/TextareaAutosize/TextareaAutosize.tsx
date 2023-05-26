'use client';

import React, { FC } from 'react';
import { TextAreaAutosizeProps } from './types';

const MIN_TEXTAREA_HEIGHT = 32;

const TextareaAutosize: FC<TextAreaAutosizeProps> = ({
  onChange,
  value,
  className,
  placeholder,
}) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  React.useLayoutEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'inherit';
    // Set height
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [value]);

  return (
    <textarea
      onChange={handleOnChange}
      className={className}
      placeholder={placeholder}
      ref={textareaRef}
      style={{
        minHeight: MIN_TEXTAREA_HEIGHT,
        resize: 'none',
      }}
      value={value}
    />
  );
};

export default TextareaAutosize;
