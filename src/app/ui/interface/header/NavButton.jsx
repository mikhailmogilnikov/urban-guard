import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/tooltip';
import { PiList, PiMapPin } from 'react-icons/pi';

function NavButton({
  type,
  tip,
  click,
  isMobileEventListOpen,
  isMobileMenuListOpen,
}) {
  let iconComponent;
  let hideButtonClass = '';
  let active;

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

  if (isMobileEventListOpen || isMobileMenuListOpen) {
    active = 'bg-[#ff5100] text-white border-0';
  }

  return (
    <Tooltip
      placement="bottom"
      closeDelay={100}
      classNames={{
        content: ['font-medium'],
      }}
      content={tip}
    >
      <Button
        isIconOnly
        onClick={click}
        className={`flex ${hideButtonClass} bg-transparent justify-center items-center w-10 h-10 rounded-2xl border border-black/20 dark:border-white/20 hover:button-hover dark:hover:button-hover-dark active:scale-90 transition-transform ${active}`}
      >
        {iconComponent}
      </Button>
    </Tooltip>
  );
}

export default NavButton;
