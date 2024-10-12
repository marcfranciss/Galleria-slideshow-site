import style from "./Home.module.sass";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDataContext } from "../../../contexts/DataContext";
import { useStateContext } from "../../../contexts/StateContext";
import { ArtDetails } from "../../ArtDetails/ArtDetails";

export const Home = () => {
  const { data, loading, error } = useDataContext();
  const { setSlider, setCurrIndex } = useStateContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleSelectedImage = (index: number) => {
    setSlider(true);
    setCurrIndex(index);
  };
  return (
    <div className={style.container}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 375: 1, 500: 2, 900: 3, 1110: 4 }}>
        <Masonry columnsCount={4} gutter='40px'>
          {data.map((items: any, index: number) => {
            return (
              <div key={items.name} className={style.hero_cards__container}>
                <div
                  style={{ height: `${items.height}px` }}
                  className={style.hero_card}
                  role='button'
                  onClick={() => handleSelectedImage(index)}>
                  <LazyLoadImage
                    key={items.name}
                    src={items.images.hero.large}
                    alt={items.name}
                  />
                  <ArtDetails
                    className={style.hero_card__details}
                    title={items.name}
                    artist={items.artist.name}
                  />
                </div>
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
