import { useState, useEffect } from 'react';
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

  useEffect(() => {
    setPage(1);
  }, [q]);

  return (
    <div>
      <h1>Search result by: {q}</h1>
      <section>
        <PostsSearchList q={q} limit={limitPosts} skip={skip}/>
        <Pagination page={page} setPage={setPage} />
      </section>
    </div>
  );
};

export default SearchResultPage;
