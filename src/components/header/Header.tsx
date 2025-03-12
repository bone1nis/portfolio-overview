import React from 'react';

import s from "./header.module.scss"

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <h2 className={s.header__title}>Portfolio Overview</h2>
      <button className={s.header__button}>добавить</button>
    </header>
  );
};

export default Header;