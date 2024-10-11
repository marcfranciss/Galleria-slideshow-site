import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { fetchLocalAPI } from "../Utils/FetchAPI";

interface TData {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: {
    image: string;
    name: string;
  };
  images: {
    thumbnail: string;
    hero: {
      small: string;
      large: string;
    };
    gallery: string;
  };
  height: string;
}

export const Home = () => {
  const [componentData, setComponentData] = useState<TData[]>([
    {
      name: "",
      year: 0,
      description: "",
      source: "",
      artist: {
        image: "",
        name: "",
      },
      images: {
        thumbnail: "",
        hero: {
          small: "",
          large: "",
        },
        gallery: "",
      },

      height: "",
    },
  ]);

  useEffect(() => {
    const fetchLocalAPI = async () => {
      const BASE_URL = "/Galleria-slideshow-site";
      try {
        const response = await fetch(`${BASE_URL}/data.json`);
        console.log({
          "Your response is": response,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        console.log({
          "Your jsonData is": jsonData,
        });

        setComponentData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchLocalAPI();
  }, []);

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 375: 1, 500: 2, 900: 3, 1110: 4 }}>
      <Masonry columnsCount={4} gutter='40px'>
        {componentData.map((data) => {
          return (
            <div
              key={data.name}
              className='hero-img--container'
              style={{ height: `${data.height}px` }}>
              <img
                key={data.name}
                src={data.images.hero.large}
                alt={data.name}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};
