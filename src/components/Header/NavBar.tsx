import style from "./navBar.module.sass";

interface NavBarProps {
  id?: string;
  className?: string;
}
export const NavBar = ({ id, className }: NavBarProps) => {
  return (
    <nav id={id} className={`${style.nav_bar} ${className}`}>
      <a href='#features'>features</a>
      <a href='#pricing'>pricing</a>
      <a href='#contact'>contact</a>
    </nav>
  );
};
