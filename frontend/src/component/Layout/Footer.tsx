import React from 'react';

interface IFooterProps {
  title?: string;
  onClick?: () => void;
  active?: boolean;
}

export const Footer = (props: IFooterProps) => {
  const shadow = props.active ? 'shadow-float' : 'shadow-basic';
  const fontColor = props.active ? 'text-gray-900' : 'text-gray-400';

  return (
    <footer className="absolute bottom-5 w-[95%] h-[6%]">
      <button
        className={`w-full h-full bg-white text-black p-2 rounded-lg ${shadow} ${fontColor}`}
        type="button"
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </footer>
  );
};
