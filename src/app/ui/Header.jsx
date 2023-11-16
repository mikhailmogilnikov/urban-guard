import NavButton from './primitives/NavButton.jsx';

const Header = () => {
  return (
    <header className="flex flex-row justify-between h-16 border-b border-black/10 dark:border-white/10 px-5">
      <div className="w-fit h-full flex flex-row justify-center items-center">
        <h1 className="h-min font-bold text-xl">Urban Guard</h1>
      </div>
      <div className="w-fit h-full flex flex-row gap-4 items-center">
        <NavButton type={'list'} />
        <NavButton type={'menu'} />
      </div>
    </header>
  );
};

export default Header;
