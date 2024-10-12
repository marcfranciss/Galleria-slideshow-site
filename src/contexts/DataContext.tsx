import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
// import axios from "axios";

interface ChildrenProps {
  children: ReactNode;
}

export const DataContext = createContext<any | undefined>(undefined);

/* Data types */
export interface TData {
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

/* Data Context Provider */
export const DataProvider = ({ children }: ChildrenProps) => {
  const [data, setData] = useState<TData[]>([
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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const BASE_URL = "/Galleria-slideshow-site";
      try {
        const response = await fetch(`${BASE_URL}/data.json`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          const jsonData = await response.json();
          setData(jsonData);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error(`useInputContext must be used within an InputProvider`);
  }
  return context;
};
