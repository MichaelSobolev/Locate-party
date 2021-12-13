import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPost } from "../../redux/actions/posts.actions";

export const PostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log("id", id);
  const post = useSelector((state) => state.currentPostStore);
  console.log(">>>>>>", post);

  useEffect(() => {
    dispatch(getPost(id));
  }, []);

  return (
    <main>
      {/*//TODO Создать шаблон карты.*/}
      <h2>Post Page</h2>
      {post ? post.title : "Error: failed to get "}
    </main>
  );
};
