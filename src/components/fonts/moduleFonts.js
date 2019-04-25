import React from 'react';

const renderFontColor = (color, children) => {
  return <span className={`${color} regular`}>{children}</span>;
}

export const HGreen = ({children}) => renderFontColor('green', children);

export const HBlue = ({children}) => renderFontColor('blue', children);

export const HYellow = ({children}) => renderFontColor('yellow', children);

export const HPurple = ({children}) => renderFontColor('purple', children);
