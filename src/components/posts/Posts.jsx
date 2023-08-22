import Post from "../post/Post";
import "./posts.scss";

const Posts = ({ postData }) => {

  // TEMPORARY


  console.log(postData.reverse())

  // Concatenate the postData prop to the posts array


  return (
    <div className="posts">
      {postData.sort((a,b)=>b.id-a.id).map((post,i) => (
        <Post post={post} key={i} />
      ))}
    </div>
  );
};

export default Posts;
