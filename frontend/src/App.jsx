import PostList from "./components/post-list";
import CreatePost from "./components/create-post";
import UpdatePost from "./components/update-post";

function App() {
  return (
    <div>
      <h1>Posts</h1>
      <PostList />

      <h1>Create Post</h1>
      <CreatePost />

      <h1>Update Post</h1>
      <UpdatePost />
    </div>
  );
}

export default App;
