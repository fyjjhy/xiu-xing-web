import React from 'react';
import { Input as InputBox } from 'antd';

export const Input = props => (
  <InputBox
    maxLength={120}
    {...props}
  />
);

export const TextArea = props => (
  <InputBox.TextArea
    maxLength={250}
    {...props}
  />
);
