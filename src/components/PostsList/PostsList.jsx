import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { getAllPostsAsync } from '../../store/postsSlice';
import PostCard from './PostCard';

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, error, isPending } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getAllPostsAsync());
  }, [dispatch]);
  const showPost = (post) => <PostCard key={post.id} post={post} />;
  if (error) {
    return <p>{error}</p>;
  }
  if (isPending) {
    return <Spinner />;
  }
  return posts.length === 0 ? (
    <p>posts list is empty</p>
  ) : (
    <section>{posts.map(showPost)}</section>
  );
};

PostsList.propTypes = {};

export default PostsList;
