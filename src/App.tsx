import { FadeIn } from "./components/Utils/Animations/FadeIn";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Pages/Home/Home";
import { SlideShow } from "./components/SlideShow/SlideShow";
import { Footer } from "./components/Footer/Footer";
import { useStateContext } from "./contexts/StateContext";

function App() {
  const { slider } = useStateContext();

  return (
    <>
      <Header />
      <section id='display-frame'>
        {slider ? (
          <FadeIn>
            <SlideShow />
            <Footer />
          </FadeIn>
        ) : (
          <FadeIn>
            <Home />
          </FadeIn>
        )}
      </section>
    </>
  );
}

export default App;
