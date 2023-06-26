import { useState } from "react";

export default function PhotoGallerySwitch(props) {
  const { photos } = props;

  const [index, setIndex] = useState(0);

  function handleNextClick() {
    setIndex((photoIndex) => (photoIndex + 1) % photos.length);
  }
  function handlePreviousClick() {
    setIndex((photoIndex) => (photoIndex + photos.length - 1) % photos.length);
  }

  return (
    <section className="gallery">
      <img src={photos[index]} alt="appartement" className="gallery-img" />

      {photos[1] && (
        <>
          <div className="chevrons-wrapper">
            <i
              className="fas fa-chevron-left"
              onClick={handlePreviousClick}
            ></i>
            <i className="fas fa-chevron-right" onClick={handleNextClick}></i>
          </div>
          <div className="img-order">
            <p>
              {index + 1}/{photos.length}
            </p>
          </div>
        </>
      )}
    </section>
  );
}
