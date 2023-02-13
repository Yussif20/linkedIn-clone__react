import "./HeaderOptions.css";
import HeaderOptionItem from "../HeaderOptionItem/HeaderOptionItem";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function HeaderOptions() {
  return (
    <div style={{ display: "flex" }}>
      <HeaderOptionItem Icon={HomeIcon} title="Home" />
      <HeaderOptionItem Icon={SupervisorAccountIcon} title="My Network" />
      <HeaderOptionItem Icon={BusinessCenterIcon} title="Jobs" />
      <HeaderOptionItem Icon={ChatIcon} title="Messaging" />
      <HeaderOptionItem Icon={NotificationsIcon} title="Notifications" />
      <HeaderOptionItem avatar="../../Assets/Images/linkedin.png" title="Me" />
    </div>
  );
}

export default HeaderOptions;
