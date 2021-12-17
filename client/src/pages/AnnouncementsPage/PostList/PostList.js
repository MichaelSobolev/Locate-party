import styles from './styles.module.css';
import {PostCard} from '../../../components/PostCard/PostCard';

export const PostList = ({posts}) => (
    <ul className={styles['post-list']}>
        {posts.map((post) => (
            <li className={styles['post-list__item']} key={post.id}>
                <PostCard props={post} />
            </li>
        ))}
    </ul>
);
