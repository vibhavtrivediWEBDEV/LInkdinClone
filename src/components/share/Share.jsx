import React, { useState } from "react";
import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Share = ({ onPost }) => {
  const { currentUser } = useContext(AuthContext);

  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePostChange = (event) => {
    setPostText(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleShareClick = () => {
    // Check if both text and an image are selected before calling onPost
    if (postText.trim() !== "" && selectedImage) {
        // Create the post object
    const newPost = {
      id: Date.now(), // Generate a unique ID (you can use a library for this)
      name: currentUser.name,
      userId: '',
      profilePic: currentUser.profilePic,
      desc: postText,
      likes:0,
      Comment:2,
      time:'just now',
      img: URL.createObjectURL(selectedImage), // Assuming selectedImage is a File
    };

    // Call the onPost function to handle the new post data
    onPost(newPost);
     
      // Reset postText and selectedImage after posting
      setPostText("");
      setSelectedImage(null);
      console.log({ text: postText, image: selectedImage })
    }
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={currentUser.profilePic} alt="" />
          <input
            type="text"
            id="post"
            placeholder={`What's on your mind ${currentUser.name}?`}
            value={postText}
            onChange={handlePostChange}
          />
        </div>
        <hr />
        {selectedImage && (
          <div id="videoContainer">
            <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
          </div>
        )}
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleShareClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
