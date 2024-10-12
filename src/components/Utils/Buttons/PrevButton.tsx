import { CSSProperties } from "react";

interface INextButton {
  className?: string;
  btnStyle?: CSSProperties;
  disabled: boolean;
  onClick: () => void;
  btnText?: string;
}

export const PrevButton = ({
  className,
  btnStyle,
  disabled,
  onClick,
  btnText,
}: INextButton) => {
  return (
    <button
      style={btnStyle}
      className={className}
      onClick={onClick}
      disabled={disabled}>
      {btnText}
      <svg width='26' height='24' xmlns='http://www.w3.org/2000/svg'>
        <g stroke='#000' fill='none' fillRule='evenodd'>
          <path
            d='M24.166 1.843L3.627 12.113l20.539 10.269V1.843z'
            strokeWidth='2'
          />
          <path fill='#D8D8D8' d='M.986.5h-1v22.775h1z' />
        </g>
      </svg>
    </button>
  );
};
