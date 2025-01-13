import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { getAllPostsByUserAsync } from '../../store/postsSlice';
import PostCard from './PostCard';

const PostListByUser = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { postsByUser, error, isPending } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPostsByUserAsync(userId));
  }, [dispatch, userId]);

  const showPost = (post) => (
    <PostCard key={post.id} post={post} withPic={true} />
  );

  if (error) {
    return <p>{error}</p>;
  }
  if (isPending) {
    return <Spinner />;
  }
  return postsByUser.length === 0 ? (
    <p>posts list is empty</p>
  ) : (
    <section>{postsByUser.map(showPost)}</section>
  );
};

PostListByUser.propTypes = {};

export default PostListByUser;
