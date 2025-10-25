import Container from "./ui_layout/Container";

const Gallery = ({ images }) => {
  return (
    <div>
      <Container>
        <h2 className="bg-linear-to-r from-[rgb(2,178,144)] to-[rgb(0,128,100)] bg-clip-text py-6 text-2xl font-bold text-transparent">
          Gallery
        </h2>
        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.slice(0, 12).map((image) => (
            <div
              key={image.id}
              className="gallery-item"
            >
              <img
                src={image.pictureURL}
                alt={image.ProductName}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
