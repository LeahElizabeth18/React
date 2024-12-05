import { useState } from "react";
import Post from "./post";
import NewPost from "./new-post";
import Modal from './modal'
import classes from "./posts-list.module.css";

function PostsList() {
  const [enteredBody, setBody] = useState("");
  const [enteredAuthor, setAuthor] = useState("");

  function bodyChangeHandler(event) {
    setBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setAuthor(event.target.value);
  }
  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Seah" body="I love coke" />
      </ul>
    </>
  );
}

export default PostsList;
