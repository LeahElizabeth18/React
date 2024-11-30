import Post from "./post";
import NewPost from "./new-post";
import classes from "./posts-list.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Leah" body="I love boba" />
        <Post author="Seah" body="I love coke" />
      </ul>
    </>
  );
}

export default PostsList;
