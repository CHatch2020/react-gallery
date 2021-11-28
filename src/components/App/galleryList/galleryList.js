import GalleryItem from "../galleryItem/galleryItem";


function GalleryList({ galleryList, updateLikes }) {
  return (
    <div>
      <p>My Discs</p>
        {galleryList.map((disc) => {
          return <GalleryItem disc={disc} updateLikes={updateLikes} />;
        })}
    </div>
  );
}

export default GalleryList;
