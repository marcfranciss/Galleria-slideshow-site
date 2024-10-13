import { LazyLoadImage } from "react-lazy-load-image-component";
import style from "./slideShow.module.sass";

import { useDataContext } from "../../contexts/DataContext";
import { useStateContext } from "../../contexts/StateContext";
import { ArtDetails } from "../ArtDetails/ArtDetails";
import { useEffect, useRef, useState } from "react";
import viewIcon from "../../assets/images/shared/icon-view-image.svg";
import { motion } from "framer-motion";

//components

export const SlideShow = () => {
  const { data, loading, error } = useDataContext();
  const { currIndex } = useStateContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const focusRef = useRef<HTMLDialogElement | null>(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  useEffect(() => {
    if (isOpen) {
      focusRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <section id='slider-frame'>
      <dialog
        id='slider-lightbox'
        className={style.slider_lightbox}
        open={isOpen}
        ref={focusRef}
        onClick={() => setIsOpen(false)}
        onKeyDown={(e) => (e.key === "Escape" ? setIsOpen(false) : null)}>
        <motion.div
          className={style.dialog_content}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
          }}
          initial='hidden'
          animate={isOpen ? "visible" : "exit"}
          exit='exit'
          transition={{ duration: 0.4 }}>
          <button onClick={() => setIsOpen(false)}>Close</button>
          <img src={data[currIndex].images.hero.large} alt='' />
        </motion.div>
      </dialog>

      <div className={style.container}>
        {data.map((items: any, index: number) => {
          return (
            <div
              key={items.name}
              className={`${style.slider_container} ${
                currIndex === index ? style.isIndex : ""
              }`}>
              <span>{}</span>
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
                  <button
                    className={style.btn_viewImage}
                    onClick={() => setIsOpen(true)}>
                    <img src={viewIcon} alt='' />
                    view image
                  </button>
                </picture>
                <div className={style.slider_image__details}>
                  <ArtDetails
                    className={style.image_details}
                    title={items.name}
                    artist={items.artist.name}
                  />
                  <LazyLoadImage
                    src={items.artist.image}
                    alt=''
                    title={items.artist.name}
                  />
                </div>
              </div>
              <div className={style.slider_text__container}>
                <h2>{items.year}</h2>
                <div className={style.slider_text}>
                  <p>{items.description}</p>
                  <a href={items.source} target='_blank'>
                    Go to source
                  </a>
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
