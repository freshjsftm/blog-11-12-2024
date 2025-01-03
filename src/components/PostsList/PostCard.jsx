import PropTypes from 'prop-types';

const PostCard = (props) => {
  const { post } = props;
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body.slice(0, 80)}...</p>
    </article>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  })
};

export default PostCard;
