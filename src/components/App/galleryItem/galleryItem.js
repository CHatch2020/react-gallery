import { useState } from "react";

function GalleryItem({ disc }) {
  const [showDescription, setShowDes] = useState(disc.description);

  const displayText = () => {
    <p>disc.description</p>;
  };

  return (
    <tbody>
      <tr>
        <td>
          <img key={disc.id} src={disc.path} onClick={displayText} />
          <button>likes</button>
        </td>
      </tr>
    </tbody>
  );
}

export default GalleryItem;
