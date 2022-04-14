import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { D20Spinner } from "../../components/D20Spinner/D20Spinner";
import { PostForm } from "../../components/PostForm/PostForm";
import { getPost } from "../../redux/actions/posts.actions";

export const PostEditPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector((state) => state.currentPostStore);
  useEffect(() => {
    dispatch(getPost(id));
  }, []);
  return (
    <>
      {post ? (
        <PostForm postId={id} editPost postData={post} />
      ) : (
        <D20Spinner />
      )}
    </>
  );
};
