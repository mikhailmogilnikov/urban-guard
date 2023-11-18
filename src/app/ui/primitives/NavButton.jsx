import { PiList, PiMapPin } from 'react-icons/pi';
import { Button } from '@nextui-org/button';

const NavButton = ({ type }) => {
  let iconComponent;
  let hideButtonClass = '';

  switch (type) {
    case 'menu':
      iconComponent = <PiList size={24} />;
      break;
    case 'list':
      iconComponent = <PiMapPin size={24} />;
      hideButtonClass = 'lg:hidden';
      break;
    default:
      iconComponent = null; // или другой компонент, который нужно отобразить по умолчанию
  }
  return (
    <Button isIconOnly
      className={`flex ${hideButtonClass} bg-transparent justify-center items-center w-10 h-10 rounded-2xl border border-black/20 dark:border-white/20 hover:button-hover dark:hover:button-hover-dark active:scale-90 transition-transform`}
    >   
      {iconComponent}
    </Button>
  );
};

export default NavButton;
