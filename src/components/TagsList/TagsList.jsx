import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTagsAsync } from '../../store/postsSlice';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';
import styles from './TagsList.module.scss';

const TagsList = () => {
  const dispatch = useDispatch();
  const { tags, error, isPending } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getAllTagsAsync());
  }, [dispatch]);

  const showTag = (tag) => (
    <li key={tag}>
      <Link to={`/posts/tag/${tag}`}>{tag}</Link>
    </li>
  );

  if (error) {
    return <p>{error}</p>;
  }
  if (isPending) {
    return <Spinner />;
  }
  return <ul className={styles.tags}>{tags.map(showTag)}</ul>;
};

export default TagsList;
