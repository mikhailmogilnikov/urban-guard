'use client';

import { useState } from 'react';
import Text from '../../primitives/Text.jsx';
import UrbanGuardLogo from '../../primitives/UrbanGuard.jsx';
import NavButton from './NavButton.jsx';
import MobileEventList from '../event-list/MobileEventList.jsx';

function Header() {
  const [isMobileEventListOpen, setIsMobileEventListOpen] = useState(false);

  const handleNavButtonClick = (type) => {
    setIsMobileEventListOpen(
      (prevState) => (type === 'list' && !prevState) || (type === 'menu' && false),
    );
  };

  return (
    <header className="h-16 z-[1002]">
      <div className="w-full h-full flex flex-row justify-between bg-white dark:bg-black border-b border-black/20 dark:border-white/20 px-5 ">
        <div className="w-fit h-full flex flex-row gap-3 justify-center items-center">
          <UrbanGuardLogo size={24} />
          <Text tag="h1" text="Urban Guard" />
        </div>
        <div className="w-fit h-full flex flex-row gap-4 items-center">
          <NavButton
            type="list"
            tip="Список событий"
            click={() => handleNavButtonClick('list')}
          />
          <NavButton
            type="menu"
            tip="Меню"
            onClick={() => handleNavButtonClick('menu')}
          />
        </div>
      </div>

      <MobileEventList
        isMobileEventListOpen={isMobileEventListOpen}
        onClose={() => setIsMobileEventListOpen(false)}
      />
    </header>
  );
}

export default Header;
