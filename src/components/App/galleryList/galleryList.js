import GalleryItem from "../galleryItem/galleryItem";

function GalleryList({ galleryList }) {
  return (
    <div>
      <p>My Discs</p>
      <table>
        {galleryList.map((disc) => {
          return <GalleryItem disc={disc} />;
        })}
      </table>
    </div>
  );
}

export default GalleryList;
