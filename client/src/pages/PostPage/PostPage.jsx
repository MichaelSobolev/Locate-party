import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { PostCard } from "../../components/PostCard/PostCard";
import { getPost } from "../../redux/actions/posts.actions";

export const PostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log("id", id);
  const post = useSelector((state) => state.currentPostStore);
  // const parsedPost = {
  //   ...post,
  //   name: post.author.name,
  //   icon: post.author.image,
  //   tags: post.System.title,
  // };
  function parsePost(post) {
    if (post) {
      console.log(post);
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

  useEffect(() => {
    dispatch(getPost(id));
  }, []);
  return <main>{post ? <PostCard props={parsePost(post)} /> : ""}</main>;
};
