import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getOnePostAsync,
  getAllCommentsByPostAsync,
} from '../../store/postsSlice';
import CommentsList from '../CommentsList/CommentsList';

const PostDetails = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { selectedPost, comments, error, isPending } = useSelector(
    (state) => state.posts
  );
  useEffect(() => {
    dispatch(getOnePostAsync(postId));
    dispatch(getAllCommentsByPostAsync(postId));
  }, [dispatch, postId]);

  if (error) {
    return <p>error</p>;
  }
  if (isPending) {
    return <p>loading</p>;
  }
  if (!selectedPost) {
    return <p>not post</p>;
  }
  return (
    <article>
      <h1>{selectedPost.title}</h1>
      <p>{selectedPost.body}</p>
      <h3>Comments:</h3>
      {comments.length === 0 ? (
        <p>empty comments list</p>
      ) : (
        <CommentsList comments={comments} />
      )}
    </article>
  );
};

export default PostDetails;
