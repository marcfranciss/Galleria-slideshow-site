import style from "./footer.module.sass";
import { NextButton } from "../Utils/Buttons/NextButton";
import { PrevButton } from "../Utils/Buttons/PrevButton";
import { useStateContext } from "../../contexts/StateContext";
import { useDataContext } from "../../contexts/DataContext";
import { ArtDetails } from "../ArtDetails/ArtDetails";

export const Footer = () => {
  const { data } = useDataContext();
  const { currIndex, setCurrIndex } = useStateContext();
  return (
    <footer>
      <div className={style.footer_container}>
        {data.map((items: any, index: number) => {
          return (
            <ArtDetails
              key={items.name}
              className={`${style.art_details} ${
                currIndex === index ? "isShown" : "isHidden"
              }`}
              title={items.name}
              artist={items.artist.name}
            />
          );
        })}
        <div className={style.footer_nav__buttons}>
          <PrevButton
            disabled={currIndex === 0}
            onClick={() => setCurrIndex((prev: number) => prev - 1)}
          />
          <NextButton
            disabled={currIndex === data.length - 1}
            onClick={() => setCurrIndex((prev: number) => prev + 1)}
          />
        </div>
      </div>
    </footer>
  );
};
