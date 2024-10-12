import "./header.sass";
import { Logo } from "./Logo";
import { SlideShowNav } from "./SlideShowNav";

export const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <Logo />
        <SlideShowNav className='slideshow-nav' />
      </div>
    </header>
  );
};
