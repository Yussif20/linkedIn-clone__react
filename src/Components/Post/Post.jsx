import { Avatar } from "@mui/material";
import "./Post.css";
import InputOption from "../InputOption/InputOption";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post bg-white p-4 rounded-lg mb-3  ">
      <div className="post__header flex mb-3">
        <Avatar src={photoUrl} />
        <div className="post__info ml-3">
          <h2 className="font-semibold">{name}</h2>
          <p className="text-sm text-gray-400 ">{description}</p>
        </div>
      </div>
      <div className="post__body p-4">
        <p>{message} </p>
      </div>
      <div className="post__buttons flex justify-evenly">
        <InputOption Icon={ThumbUpIcon} color="gray" title="Like" />
        <InputOption Icon={ChatIcon} color="gray" title="Comment" />
        <InputOption Icon={ShareIcon} color="gray" title="Share" />
        <InputOption Icon={SendIcon} color="#gray" title="Send" />
      </div>
    </div>
  );
}

export default Post;
