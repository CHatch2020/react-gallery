function GalleryList({ galleryList }) {
  return (
    <div>
      <p>My Discs</p>
      {galleryList.map((disc) => {
          return <img key={disc.id} src={disc.path} />
      })}
    </div>
  );
}

export default GalleryList;
