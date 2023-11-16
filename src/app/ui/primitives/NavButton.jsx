import { PiList, PiMapPin } from 'react-icons/pi';

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
    <button
      className={`flex ${hideButtonClass} justify-center items-center w-10 h-10 rounded-2xl border border-black/10 dark:border-white/10`}
    >
      {iconComponent}
    </button>
  );
};

export default NavButton;
