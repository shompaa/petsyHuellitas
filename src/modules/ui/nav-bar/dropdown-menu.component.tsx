import { Link } from "react-router-dom";
import { NavItem } from "./nav-item.component";

interface IProps {
    isOpen: boolean;
    toggle: () => void;
}

export const DropdownMenu = ({ isOpen, toggle }: IProps) => {
  return (
    <div className={
            isOpen 
            ? 'grid grid-rows-4 text-center items-center bg-pink-100 text-white'
            : 'hidden'
        }
        onClick={toggle}
    >
        <NavItem path="/" title="Inicio" className="p-4"/>
        <NavItem path="/perros" title="Perros" className="p-4"/>
        <NavItem path="/gatos" title="Gatos" className="p-4"/>
        <NavItem path="/sobre-nosotros" title="Sobre nosotros" className="p-4"/>
        <NavItem path="/contacto" title="Contacto" className="p-4"/>
    </div>
  );
}


