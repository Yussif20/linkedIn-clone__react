import "./Header.css";
import Logo from "../../Assets/Images/linkedin.png";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOptions from "../HeaderOptions/HeaderOptions";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="linkedin logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions />
      </div>
    </div>
  );
}

export default Header;
