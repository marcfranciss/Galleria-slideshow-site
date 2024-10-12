import { CSSProperties } from "react";

interface INextButton {
  className?: string;
  btnStyle?: CSSProperties;
  disabled: boolean;
  onClick: () => void;
  btnText?: string;
}

export const NextButton = ({
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
            d='M1.528 1.843l20.538 10.27L1.528 22.382V1.843z'
            strokeWidth='2'
          />
          <path fill='#D8D8D8' d='M24.708.5h1v22.775h-1z' />
        </g>
      </svg>
    </button>
  );
};
