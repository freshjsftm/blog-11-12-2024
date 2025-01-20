import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TagPosts from '../components/TagPosts/TagPosts';
import TagsList from '../components/TagsList/TagsList';
import styles from './pages.module.scss';
import Pagination from '../components/Pagination/Pagination';
import CONSTANTS from '../constants';

const TagPage = () => {
  const { tagName } = useParams();
  const [page, setPage] = useState(1);
  const limitPosts = CONSTANTS.LIMITS_POSTS.at(2); //5
  const skip = (page - 1) * limitPosts;

  useEffect(() => {
    setPage(1);
  }, [tagName]);

  return (
    <div className={styles.wrapper}>
      <h1>{tagName}</h1>
      <div className={styles.container}>
        <section>
          <TagPosts tagName={tagName} limit={limitPosts} skip={skip} />
          <Pagination page={page} setPage={setPage} />
        </section>
        <section>
          <TagsList />
        </section>
      </div>
    </div>
  );
};

export default TagPage;
