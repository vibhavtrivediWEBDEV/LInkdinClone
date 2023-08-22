import React, { useContext, useEffect, useState } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import StoryModal from './Model'

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const [stories, setStories] = useState([
    {
      id: 1,
      name: "Himanshu",
      img: "https://source.unsplash.com/300x300?",
    },
    {
      id: 2,
      name: "Ritesh",
      img: "https://source.unsplash.com/300x300?programmer",
    },
    {
      id: 3,
      name: "Vedang",
      img: "https://source.unsplash.com/300x300?bodybuilder",
    },
    {
      id: 4,
      name: "Alan Walker",
      img:
        "https://source.unsplash.com/300x300?alan",
    },
  ]);

  const [selectedStory, setSelectedStory] = useState(null);

  // Function to open the modal when a story is clicked
  const handleStoryClick = (imageUrl, name, profilePic) => {
    setSelectedStory({ imageUrl, name, profilePic });
  };


  const closeStoryModal = () => {
    setSelectedStory(null);
  };

  useEffect(() => {
    // Function to fetch new images and update the stories array
    const updateStoriesImages = () => {
      const updatedStories = stories.map((story) => {
        // Generate a random number to force a cache refresh
        const randomCacheBuster = Math.random();
        return {
          ...story,
          img: `${story.img}?cache=${randomCacheBuster}`,
        };
      });
      setStories(updatedStories);
    };

    // Set up an interval to update the images every 5 seconds
    const interval = setInterval(updateStoriesImages, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [stories]);

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id} onClick={() => handleStoryClick(story.img, story.name, currentUser.profilePic)}>
        <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}


      {selectedStory && (
        <StoryModal
          isOpen={true}
          onRequestClose={closeStoryModal}
          imageUrl={selectedStory.imageUrl}
          name={selectedStory.name}
          profilePic={selectedStory.profilePic}
        />
      )}

    </div>
  );
};

export default Stories;
