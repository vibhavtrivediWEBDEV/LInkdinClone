import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import "./home.scss";
import { useEffect, useState } from "react";

const Home = () => {

  var id = 0 ;
 

  const posts = [
    {
      id: 1,
      name: "Adarsh",
      userId: id,
      likes:12,
      time: '4 hours',
      Comment:9,
      profilePic:
        "https://source.unsplash.com/700x800?girl",
      img:
        "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: id,
      name: "Jane Doe",
      userId: 2,
      likes:'2.5k',
      time:'15 min ago',
      Comment:9,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc:
        "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];
  // Define a default value for the postData prop
 
  const [data,setdata]=useState(posts)

  const onPost = (postData) => {
    // Handle the post data here, e.g., send it to an API or update state
    console.log("Posted data:", postData);
    console.log(" data:", data);
    const newData = [...data,postData]
    console.log(newData)
    id++;
    setdata(newData)
  };

 

  return (
    <div className="home">
      <Stories />
      <Share onPost={onPost} />
      {/* Pass the defaultPostData as a prop */}
      <Posts postData={data} />
    </div>
  );
};

export default Home;
