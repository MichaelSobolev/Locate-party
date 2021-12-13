import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ButtonPost } from "../../components/PostCard/ButtonPost/ButtonPost";
import { PostCard } from "../../components/PostCard/PostCard";
import { getPost } from "../../redux/actions/posts.actions";

export const PostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.currentPostStore);
  const userName = useSelector((state) => state.user.value?.name);
  console.log("=======NAME:======", userName, "=======NAME:======");
  function parsePost(post) {
    if (post) {
      return {
        ...post,
        name: post["author.name"],
        icon: post["author.image"],
        tags: post["System.title"],
        button: false,
      };
    }
    return null;
  }

  function editButtonVerification() {
    const currentPost = parsePost(post);
    const author = currentPost["name"];
    if (author === userName) {
      console.log(userName, author);
      console.log("NAME EXIST!");
      return (
        <ButtonPost path="/announcements/edit/" id={currentPost.id}>
          Отправить
        </ButtonPost>
      );
    }
    console.log("NAME  NOT EXIST!");
  }
  useEffect(() => {
    dispatch(getPost(id));
  }, [userName]);
  return (
    <main>
      {post ? <PostCard props={parsePost(post)} /> : ""}
      <div>{userName ? editButtonVerification() : ""}</div>
    </main>
  );
};
