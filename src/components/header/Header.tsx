import s from "./header.module.scss"


type HeaderProps = {
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  return (
    <header className={s.header}>
      <h2 className={s.header__title}>Portfolio Overview</h2>
      <button className={s.header__button} onClick={openModal}>добавить</button>
    </header>
  );
};

export default Header;