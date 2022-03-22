import { useNavigate } from 'react-router-dom';
import { MenuIcon } from '../icons/menu.icon';
import { NavItem } from './nav-item.component';
import Logo from '../../../assets/svg/logo-2.svg';


interface IProps {
  toggle: () => void;
}

export const NavBar = ({ toggle }: IProps) => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center h-16 bg-pink-100 relative shadow-sm font-bold" role="navigation">
      <img 
        src={Logo} 
        alt="Logo" 
        className="pl-8 w-1/6 h-auto"
        onClick={() => navigate('/')}
      />
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <MenuIcon></MenuIcon>
      </div>
      <div className="pr-8 md:block hidden">
        <NavItem path="/" title="Inicio"/>
        <NavItem path="/perros" title="Perros" />
        <NavItem path="/gatos" title="Gatos" />
        <NavItem path="/sobre-nosotros" title="Sobre nosotros" />
        <NavItem path="/contacto" title="Contacto" />
      </div>
    </nav>
  );
}
