import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { getAllPostsByTagAsync } from '../../store/postsSlice';
import PostCard from '../PostsList/PostCard';

const TagPosts = (props) => {
  const { tagName } = props;
  const dispatch = useDispatch();
  const { posts, error, isPending } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPostsByTagAsync(tagName));
  }, [dispatch, tagName]);

  const showPost = (post) => <PostCard post={post} withPic/>;

  if (error) {
    return <p>{error}</p>;
  }
  if (isPending) {
    return <Spinner />;
  }
  return <div>{posts.map(showPost)}</div>;
};

TagPosts.propTypes = {
  tagName: PropTypes.string,
};

export default TagPosts;
