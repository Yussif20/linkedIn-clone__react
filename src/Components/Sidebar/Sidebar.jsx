import { Avatar } from "@mui/material";
import "./Sidebar.css";
import AvatarImage from "../../Assets/Images/avatar.jpg";
import BackgroundImage from "../../Assets/Images/background.jpeg";

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={BackgroundImage} alt="avatar background" />
        <Avatar className="sidebar__avatar" src={AvatarImage} />
        <h2>Yousef Ayman</h2>
        <h4>yousefayman2000500@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Profile Views</p>
          <p className="sidebar__statNumber">2,789</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,119</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React")}
        {recentItem("Javascript")}
        {recentItem("Css")}
        {recentItem("Design")}
        {recentItem("Developer")}
        {recentItem("Html")}
      </div>
    </div>
  );
}

export default Sidebar;
