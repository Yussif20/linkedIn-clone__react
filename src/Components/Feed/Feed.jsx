import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "../Post/Post";
function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Start a post" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={ImageIcon} color="#70B5F9" title="Photo" />
          <InputOption Icon={SubscriptionsIcon} color="#E7A33E" title="Video" />
          <InputOption Icon={EventNoteIcon} color="#C0CBCD" title="Event" />
          <InputOption
            Icon={ArticleIcon}
            color="#7fc15e"
            title="Write Article"
          />
        </div>
      </div>
      <Post />
    </div>
  );
}

export default Feed;
