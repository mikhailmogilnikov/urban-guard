import { ScrollShadow } from '@nextui-org/scroll-shadow';
import ThemeSwitcher from './ThemeSwitcher.jsx';

function MenuList() {
  return (
    <ScrollShadow className="w-full h-full flex flex-col overflow-y-scroll overflow-x-hidden gap-10 p-5">
      <div className="absolute animate-pulse" />
      <ThemeSwitcher />
    </ScrollShadow>
  );
}

export default MenuList;
