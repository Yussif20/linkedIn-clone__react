import { Avatar } from "@mui/material";
import "./HeaderOptionItem.css";

function HeaderOptionItem({ Icon, title, avatar }) {
  return (
    <div className="headerOption hover:text-blue-500">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar src={avatar} className="headerOption__icon" />}
      <h3 className="text-sm font-medium">{title}</h3>
    </div>
  );
}

export default HeaderOptionItem;
