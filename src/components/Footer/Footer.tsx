import "./footer.sass";
import { Logo } from "../Header/Logo";
import { SocialNav } from "../SocialNav/SocialNav";
import { NavBar } from "../Header/NavBar";

export const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <Logo fillColor='white' />
        <NavBar className='nav-footer' />
        <SocialNav />
      </div>
    </footer>
  );
};
