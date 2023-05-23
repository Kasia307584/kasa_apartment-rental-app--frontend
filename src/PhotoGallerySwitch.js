import { useState } from "react";

export default function Gallery(props) {
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
      <div className="chevrons-wrapper">
        <i className="fas fa-chevron-left" onClick={handleNextClick}></i>
        <i className="fas fa-chevron-right" onClick={handlePreviousClick}></i>
      </div>
    </section>
  );
}
