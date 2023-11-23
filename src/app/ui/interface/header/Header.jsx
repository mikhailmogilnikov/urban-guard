import Text from '../../primitives/Text.jsx';
import UrbanGuardLogo from '../../primitives/UrbanGuard.jsx';
import NavButton from './NavButton.jsx';

function Header() {
  return (
    <header className="flex flex-row justify-between h-16 border-b border-black/20 dark:border-white/20 px-5">
      <div className="w-fit h-full flex flex-row gap-3 justify-center items-center">
        <UrbanGuardLogo size={24} />
        <Text tag="h1" text="Urban Guard" />
      </div>
      <div className="w-fit h-full flex flex-row gap-4 items-center">
        <NavButton type="list" tip="Список событий" />
        <NavButton type="menu" tip="Меню" />
      </div>
    </header>
  );
}

export default Header;
