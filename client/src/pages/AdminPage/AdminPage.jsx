import { useDispatch } from "react-redux";
import { createNews } from "../../redux/actions/news.action";
import { addMockUser, addSystem } from "../../redux/actions/posts.actions";

export const AdminPage = () => {
  const dispatch = useDispatch();
  return (
    <main>
      <button
        onClick={() => {
          dispatch(addSystem());
        }}
      >
        add System
      </button>
      <button
        onClick={() => {
          dispatch(addMockUser());
        }}
      >
        add MockUser
      </button>
      <button
        onClick={() => {
          dispatch(createNews());
        }}
      >
        add addMockArticle
      </button>
    </main>
  );
};
