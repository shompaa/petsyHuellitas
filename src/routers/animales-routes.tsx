import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Gatos } from '../modules/gatos/gatos.component';
import { NotFound } from '../modules/not-found/not-found.component';
import { Perros } from '../modules/perros/perros.component';
import { DropdownMenu } from '../modules/ui/nav-bar/dropdown-menu.component';
import { NavBar } from '../modules/ui/nav-bar/nav-bar.component';

export const AnimalesRoutes = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        const hideMenu = () => {
        if(window.innerWidth > 768 && isOpen) {
            setIsOpen(false);
        }
        }
        window.addEventListener('resize', hideMenu);

        return () => {
        window.removeEventListener('resize', hideMenu);
        }
    });
    return (
        <>
            <NavBar toggle={toggle} />
            <DropdownMenu isOpen={isOpen} toggle={toggle}/>
            <Routes>
                <Route path="perros" element={<Perros />} />
                <Route path="gatos" element={<Gatos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}
