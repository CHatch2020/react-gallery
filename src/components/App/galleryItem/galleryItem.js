import { useState } from "react";

function GalleryItem({ disc }) {
  const [showDescription, setShowDes] = useState(disc.description);
  const [likeCount, setLikeCount] = useState(0);

//   const displayText = () => {
    
//   };

  const likes = () => {
    setLikeCount(likeCount + 1);
  }

  return (
    <tbody>
      <tr>
        <td>
          <img key={disc.id} src={disc.path} />
          <td>Likes: {likeCount}</td>
          <button onClick={likes}>likes</button>
        </td>
      </tr>
    </tbody>
  );
}

export default GalleryItem;
