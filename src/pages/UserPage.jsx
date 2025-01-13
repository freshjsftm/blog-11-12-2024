import PostListByUser from '../components/PostsList/PostListByUser';
import UserProfile from '../components/UserProfile/UserProfile';

const UserPage = () => {
  return (
    <div>
      <UserProfile />
      <h2>My posts</h2>
      <PostListByUser />
    </div>
  );
};

export default UserPage;
