import Logo from "../../assets/to_do_list_logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="logo todolist" className="header__logo" />
      <h1 className="header__title">TO DO LIST</h1>
    </header>
  );
};

export default Header;
