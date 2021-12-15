import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ButtonPost } from "../../components/PostCard/ButtonPost/ButtonPost";
import { getPost } from "../../redux/actions/posts.actions";
import { PostList } from "../AnnouncementsPage/PostList/PostList";

export const PostPage = () => {
  const [isPostExist, setIsPostExist] = useState(false);
  const [parsedPost, setParsedPost] = useState(null);
  const [isPostloaded, setIsPostLoaded] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.currentPostStore);
  const userName = useSelector((state) => state.user.value?.name);

  function parsePost(post) {
    if (post) {
      setParsedPost({
        ...post,
        name: post["author.name"],
        icon: post["author.image"],
        tags: post["System.title"],
        button: false,
      });
    }
    return;
  }

  function editButtonVerification() {
    // const author = parsedPost["name"];
    // if (author === userName) {
    //   setIsPostExist(true);
    // }
    setIsPostExist(true);
  }
  useEffect(() => {
    dispatch(getPost(id));
  }, [userName]);

  useEffect(() => {
    parsePost(post);
  }, [post]);

  useEffect(() => {
    if (parsedPost) {
      editButtonVerification();
    }
  }, [parsedPost]);

  return (
    <div>
      {isPostExist && <PostList posts={parsedPost} />}
      <div>
        {isPostloaded && (
          <ButtonPost path="/announcements/edit/" id={parsedPost.id}>
            Присоединиться
          </ButtonPost>
        )}
        {isPostExist && (
          <ButtonPost path="/announcements/edit/" id={parsedPost.id}>
            Отправить
          </ButtonPost>
        )}
      </div>
    </div>
  );
};
