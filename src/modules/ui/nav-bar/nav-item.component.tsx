import { NavLink } from 'react-router-dom';

interface IProps {
    path: string;
    title: string;
    icon?: any;
    className?: string;
}

export const NavItem = ({
    path = '/',
    title = '',
    icon = '',
    className = '',
}: IProps) => {
  return (
    <NavLink
        className={
          ({ isActive }) => 
            `p-4 text-pink-900 hover:text-pink-500 ${ className }` + 
            (isActive 
              ? 'font-bold !text-white bg-pink-300 shadow ' 
              : ''
          )} 
        to={path}
    > 
      {icon} {title}
    </NavLink>
  )
}
