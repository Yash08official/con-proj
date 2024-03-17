import { useEffect, useState } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/post")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deletePost = async (id) => {
    const resposne = await axios.delete(`http://localhost:5000/post/${id}`);

    console.log(resposne);
  };

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h2>{post._id}</h2>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <button onClick={() => deletePost(post._id)}>Delete post</button>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
