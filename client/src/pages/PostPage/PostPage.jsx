import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ButtonPost } from "../../components/PostCard/ButtonPost/ButtonPost";
import { PostCard } from "../../components/PostCard/PostCard";
import { getPost } from "../../redux/actions/posts.actions";

export const PostPage = () => {
  const [isPostExist, setIsPostExist] = useState(false);
  const [parsedPost, setParsedPost] = useState(null);

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
    const author = 'oleg'// parsedPost["name"];
    if (author === userName) {
      setIsPostExist(true);
    }
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
    <main>
      {isPostExist && <PostCard props={parsedPost} />}
      <div>
        {isPostExist && (
          <ButtonPost path="/announcements/edit/" id={parsedPost.id}>
            Отправить
          </ButtonPost>
        )}
      </div>
    </main>
  );
};
