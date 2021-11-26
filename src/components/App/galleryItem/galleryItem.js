import { useState } from "react";
import "./galleryItem.css";

function GalleryItem({ disc }) {
  const [showDescription, setShowDescription] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleDescription = () => {
    console.log("working click");
    setShowDescription(!showDescription);
  };

  const displayItems = () => {
    if (showDescription) {
      return <p onClick={toggleDescription}>{disc.description}</p>;
    } else {
      return <img key={disc.id} src={disc.path} onClick={toggleDescription} />;
    }
  };

  const likes = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="disc">
      {displayItems()}
      <p>Likes: {likeCount}</p>
      <button onClick={likes}>likes</button>
    </div>
  );
}

export default GalleryItem;
