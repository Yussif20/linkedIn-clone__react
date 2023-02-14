import { Avatar } from "@mui/material";
import "./Sidebar.css";
import AvatarImage from "../../Assets/Images/avatar.jpg";
import BackgroundImage from "../../Assets/Images/background.jpeg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={BackgroundImage} alt="avatar background" />
        <Avatar className="sidebar__avatar" src={AvatarImage} />
        <h2>Yousef Ayman</h2>
        <h2>yousefayman2000500@gmail.com</h2>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">2,789</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,119</p>
        </div>
        <div className="sidebar__bottom">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
