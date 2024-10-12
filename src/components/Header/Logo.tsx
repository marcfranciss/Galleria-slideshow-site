import "./logo.sass";
import logo from "../../assets/images/shared/logo.svg";

export const Logo = () => {
  return (
    <div className='logo-container'>
      <a href='./' aria-label='page logo'>
        <img src={logo} alt='Page logo' />
      </a>
    </div>
  );
};
