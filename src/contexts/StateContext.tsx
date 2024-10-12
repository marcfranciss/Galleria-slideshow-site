import { createContext, useState, ReactNode, useContext } from "react";
// import axios from "axios";

interface IStateProvider {
  children: ReactNode;
}
interface TStateProvider {
  slider: boolean;
  setSlider: (value: boolean) => void;
  currIndex: number;
  setCurrIndex: (value: any) => void;
}
export const StateContext = createContext<TStateProvider | undefined>(
  undefined
);

/* Data Context Provider */
export const StateProvider = ({ children }: IStateProvider) => {
  const [slider, setSlider] = useState<boolean>(false);
  const [currIndex, setCurrIndex] = useState<number>(0);

  return (
    <StateContext.Provider
      value={{ slider, setSlider, currIndex, setCurrIndex }}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error(`useInputContext must be used within an InputProvider`);
  }
  return context;
};
