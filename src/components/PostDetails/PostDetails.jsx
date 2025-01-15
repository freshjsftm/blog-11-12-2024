import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiThumbUpOutline, mdiThumbDownOutline } from '@mdi/js';
import {
  getOnePostAsync,
  getAllCommentsByPostAsync,
} from '../../store/postsSlice';
import CommentsList from '../CommentsList/CommentsList';
import { getOneUser } from '../../api';
import styles from './PostDetails.module.scss';

const PostDetails = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { selectedPost, comments, error, isPending } = useSelector(
    (state) => state.posts
  );

  const [author, setAuthor] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    dispatch(getOnePostAsync(postId));
    dispatch(getAllCommentsByPostAsync(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await getOneUser(selectedPost.userId);
        setAuthor(`${response.data.firstName} ${response.data.lastName}`);
        setAvatar(response.data.image);
      } catch (error) {
        console.log(error);
        setAuthor('anonim');
        setAvatar('/images/anonim.png');
      }
    };
    if (selectedPost) {
      loadUser();
    }
  }, [selectedPost]);

  if (error) {
    return <p>error</p>;
  }
  if (isPending) {
    return <p>loading...</p>;
  }
  if (!selectedPost) {
    return <p>not post</p>;
  }
  return (
    <article className={styles.post}>
      <div className={styles['flex-row']}>
        <div className={styles['flex-row']}>
          <img className={styles.avatar} src={avatar} />
          <div>
            <p>
              {author}
              {/*  ({selectedPost.userId}) */}
            </p>
            <p>views: {selectedPost.views}</p>
          </div>
        </div>
        <div>
          <Icon size={1} path={mdiThumbUpOutline} />{' '}
          {selectedPost.reactions.likes}
          <Icon size={1} path={mdiThumbDownOutline} />{' '}
          {selectedPost.reactions.dislikes}
        </div>
      </div>

      <h1>{selectedPost.title}</h1>
      <picture>
        <source media="(min-width: 1200px)" srcSet="/images/1600x1200.png" />
        <source media="(min-width: 992px)" srcSet="/images/1200x800.png" />
        <source media="(min-width: 576px)" srcSet="/images/600x400.png" />
        <img
          src="/images/300x200.png"
          className={styles['post-img']}
          alt={selectedPost.title}
        />
      </picture>
      <div>
        <p>{selectedPost.body}</p>
        <h3>Comments:</h3>
        {comments.length === 0 ? (
          <p>empty comments list</p>
        ) : (
          <CommentsList comments={comments} />
        )}
      </div>
    </article>
  );
};

export default PostDetails;
