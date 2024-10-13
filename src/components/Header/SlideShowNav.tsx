import { useState } from "react";
import { useStateContext } from "../../contexts/StateContext";
import { ShowSlideButton } from "../Utils/Buttons/ShowSlideButton";

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
      <ShowSlideButton
        onClick={handleSlideShowButton}
        disabled={disableBtn}
        ariaControls='display-frame'
        sliderState={slider}
      />
    </div>
  );
};
