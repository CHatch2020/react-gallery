import GalleryItem from "../galleryItem/galleryItem";


function GalleryList({ galleryList }) {
  return (
    <div>
      <p>My Discs</p>
        {galleryList.map((disc) => {
          return <GalleryItem disc={disc} />;
        })}
    </div>
  );
}

export default GalleryList;
