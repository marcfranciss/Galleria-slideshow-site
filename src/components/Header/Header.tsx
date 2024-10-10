import "./header.sass";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { NavBarMobile } from "./NavBarMobile";

export const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <Logo fillColor='blue' />
        <div className='nav-header__container'>
          <NavBar id='nav-main' className='nav-main' />
        </div>
        <NavBarMobile />
      </div>
    </header>
  );
};
