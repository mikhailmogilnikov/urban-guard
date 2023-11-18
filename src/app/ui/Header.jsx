import NavButton from './primitives/NavButton.jsx';
import Text from './primitives/Text.jsx'

const Header = () => {
  return (
    <header className="flex flex-row justify-between h-16 border-b border-black/20 dark:border-white/20 px-5">
      <div className="w-fit h-full flex flex-row justify-center items-center">
        <Text tag={'h1'} text={'Urban Guard'}/>
      </div>
      <div className="w-fit h-full flex flex-row gap-4 items-center">
        <NavButton type={'list'} tip={'Список событий'}/>
        <NavButton type={'menu'} tip={'Меню'}/>
      </div>
    </header>
  );
};

export default Header;
