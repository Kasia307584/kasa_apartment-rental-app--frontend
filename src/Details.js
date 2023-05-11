import data from "./data.json";
import galleryImg from "./images/gallery-img.png";

export default function Details() {
  console.log(data[0].location);
  return (
    <main className="main">
      <section className="gallery">
        <img src={galleryImg} alt="appartement" className="gallery-img" />
        <i className="fas fa-chevron-down"></i>
        <i className="fas fa-chevron-up"></i>
      </section>
      <section className="info">
        <div className="main-info">
          <div className="first-info">
            <h1 className="title">Cozy loft on the Canal Saint-Martin</h1>
            <p className="location">Paris, Île-de-France</p>
            <div className="tags">
              <ul>
                <li>Cozy</li>
                <li>Canal</li>
                <li>Paris 10</li>
              </ul>
            </div>
          </div>
          <div className="second-info">
            <div className="host">
              <p className="host-name">Alexandre Dumas</p>

              <img
                src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg"
                alt="host"
                className="host-img"
              />
            </div>
            <div className="rating">Raiting here</div>
          </div>
        </div>
        <div className="dropmenu-wrapper">
          <article className="dropmenu">
            <button className="dropbtn">
              Fiabilité&emsp;<i className="fas fa-chevron-down"></i>
              <i className="fas fa-chevron-up"></i>
            </button>
            <p className="text">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </article>
          <article className="dropmenu">
            <button className="dropbtn">
              Respect&emsp;<i className="fas fa-chevron-down"></i>
              <i className="fas fa-chevron-up"></i>
            </button>
            <p className="text">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
