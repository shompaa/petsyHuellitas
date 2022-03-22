import { ReactElement } from 'react';
import { IImage } from '../../../shared/interfaces/utils-group';
interface IProps {
    image: IImage;
    className?: string;
    onClick?: () => void;
}

export const InformationCard = ({ image, className, onClick }: IProps): ReactElement => {
  return (
    <div onClick={onClick}>
        <img 
            className={`bg-origin-border shadow-sm rounded-lg w-60 md:w-96 mx-auto clickeable mt-4 ${className} `} 
            src={image.url}
            alt={image.alt}
        />
    </div>
  )
}
