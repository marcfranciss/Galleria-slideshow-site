interface IShowSlideButton {
  onClick: () => void;
  disabled: boolean;
  sliderState: boolean;
  ariaControls: string;
}

export const ShowSlideButton = ({
  onClick,
  disabled,
  sliderState,
  ariaControls,
}: IShowSlideButton) => {
  return (
    <button onClick={onClick} disabled={disabled} aria-controls={ariaControls}>
      {sliderState ? "STOP" : "START"} SLIDESHOW
    </button>
  );
};
