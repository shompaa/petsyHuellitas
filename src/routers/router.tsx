import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index } from '../modules/index/index.component';
import { AnimalesRoutes } from './animales-routes';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/*" element={<AnimalesRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}
