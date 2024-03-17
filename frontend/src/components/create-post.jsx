import { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  /* it used to take input from user */
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");

  const handleSubmit = async () => {
    const resposne = await axios.post("http://localhost:5000/post", {
      title: title,
      description: description,
    });

    console.log(resposne);
  };

  return (
    <div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDiscription(event.target.value)}
        />
      </div>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default CreatePost;
