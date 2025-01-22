import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import PostsSearchList from '../components/PostsList/PostsSearchList';
import Pagination from '../components/Pagination/Pagination';
import CONSTANTS from '../constants';

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');
  const [page, setPage] = useState(1);
  const limitPosts = CONSTANTS.LIMITS_POSTS.at(2); //5
  const skip = (page - 1) * limitPosts;
  const { total } = useSelector((state) => state.posts);

  useEffect(() => {
    setPage(1);
  }, [q]);

  return (
    <div>
      <h1>Search result by: {q}</h1>
      <section>
        <PostsSearchList q={q} limit={limitPosts} skip={skip} />
        {total > 0 ? (
          <Pagination page={page} setPage={setPage} total={total} limit={limitPosts}/>
        ) : (
          <p>posts not found</p>
        )}
      </section>
    </div>
  );
};

export default SearchResultPage;
