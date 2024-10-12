import { useRef, useState } from "react";
import { useStateContext } from "../../contexts/StateContext";
import { bool } from "prop-types";

interface ISlideShowNav {
  className: string;
}
export const SlideShowNav = ({ className }: ISlideShowNav) => {
  const { slider, setSlider, setCurrIndex } = useStateContext();
  const [disableBtn, setDisableBtn] = useState<boolean>(false);
  const handleSlideShowButton = () => {
    setSlider(!slider);
    setCurrIndex(0);
    setDisableBtn(true);
    setTimeout(() => {
      setDisableBtn(false);
    }, 800);
  };
  return (
    <div className={className}>
      <button
        onClick={handleSlideShowButton}
        disabled={disableBtn}
        aria-controls='display-frame'>
        {slider ? "STOP" : "START"} SLIDESHOW
      </button>
    </div>
  );
};
