import { LazyLoadImage } from "react-lazy-load-image-component";
import style from "./slideShow.module.sass";

import { useDataContext } from "../../contexts/DataContext";
import { useStateContext } from "../../contexts/StateContext";
import { ArtDetails } from "../ArtDetails/ArtDetails";

//components

export const SlideShow = () => {
  const { data, loading, error } = useDataContext();
  const { currIndex } = useStateContext();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section id='slider-frame'>
      <div className={style.container}>
        {data.map((items: any, index: number) => {
          return (
            <div
              key={items.name}
              className={`${style.slider_container} ${
                currIndex === index ? style.isIndex : ""
              }`}>
              <div className={style.slider_image__container}>
                <picture className={style.slider_image}>
                  <source
                    src={items.images.hero.small}
                    media='(max-width: 600px)'
                  />
                  <source
                    src={items.images.hero.large}
                    media='(min-width: 601px)'
                  />
                  <img src={items.images.hero.small} alt='' />
                </picture>
                <div className={style.slider_image__details}>
                  <ArtDetails
                    className={style.image_details}
                    title={items.name}
                    artist={items.artist.name}
                  />
                  <LazyLoadImage src={items.artist.image} alt='' />
                </div>
              </div>
              <div className={style.slider_text__container}>
                <h2>{items.year}</h2>
                <div className={style.slider_text}>
                  <p>{items.description}</p>
                  <a href={items.source}>Go to source</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <label htmlFor='slide-number'>
        <progress id='slide-number' max={data.length - 1} value={currIndex} />
      </label>
    </section>
  );
};
