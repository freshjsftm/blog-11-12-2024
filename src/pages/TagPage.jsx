import { useParams } from "react-router-dom";
import TagPosts from "../components/TagPosts/TagPosts";
import TagsList from "../components/TagsList/TagsList";

const TagPage = () => {
  const {tagName} = useParams();
  return (
    <div>
      <h1>{tagName}</h1>
      <section>
        <TagPosts tagName={tagName}/>
      </section>
      <section>
        <TagsList />
      </section>
    </div>
  );
}

export default TagPage;
