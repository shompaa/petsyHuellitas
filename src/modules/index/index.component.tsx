import Logo from '../../assets/svg/logo.svg';
import Perro from '../../assets/svg/perros.svg';
import Gato from '../../assets/svg/gatos.svg';
import Exotico from '../../assets/svg/exoticos.svg';
import { InformationCard } from './components/information-card.component';
import { useNavigate } from 'react-router-dom';

export const Index = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-pink-100 p-2 md:p-8">
        <img 
          className="w-64 h-auto md:w-96 rounded-sm mx-auto" 
          src={Logo} 
          alt="" 
        />
        <div className="pt-3 md:p-8 text-center">
          <p className="text-s md:text-lg">Instagram</p>
          <p className="text-s md:text-lg">WhatsApp</p>
          <p className="text-s md:text-lg">Peñalolen</p>
        </div>
      </div>
      <div className="flex flex-col justify-center md:grid md:grid-rows-3 gap-4 place-items-center">
        <InformationCard
          onClick={() => navigate('/gatos')}
          image={{
            url: Gato,
            alt: 'Imagen de una patita con el texto "Gato"',
          }}
        />
        <InformationCard
          onClick={() => navigate('/perros')}
          image={{
            url: Perro,
            alt: 'Imagen de una patita con el texto "Perro"',
          }}
        />
        <InformationCard
          className="bg-amber-100" 
          image={{
            url: Exotico,
            alt: 'Imagen de una patita con el texto "Exótico"',
          }}
        />
        <div>
          <img className="opacity-20 w-3/5 md:w-48 h-auto mx-auto" src="https://i.pinimg.com/236x/7b/08/6b/7b086bf2d426e923c9c447f3797853a6.jpg" alt="" />
        </div>
        <div className='col-span-2'>
          <img className="opacity-20 w-3/5 md:w-48 h-auto mx-auto" src="https://i.pinimg.com/236x/7b/08/6b/7b086bf2d426e923c9c447f3797853a6.jpg" alt="" />
        </div>
      </div>
    </>
  )
}
