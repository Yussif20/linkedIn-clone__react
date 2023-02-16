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
      <div className="sidebar__top pb-5 bg-white">
        <img src={BackgroundImage} alt="avatar background" />
        <Avatar className="mb-3" src={AvatarImage} />
        <h2 className="font-semibold text-xl ">Yousef Ayman</h2>
        <h4 className="text-gray-500 text-xs">Front-end Developer</h4>
      </div>
      <div className="sidebar__stats px-2 pb-2">
        <div className="sidebar__stat hover:bg-gray-300">
          <p className="">Profile Views</p>
          <p className="sidebar__statNumber">2,789</p>
        </div>
        <div className="sidebar__stat hover:bg-gray-300">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,119</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p className="text-center font-semibold text-md">Recent</p>
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
