import backgroundImgAbout from "./images/background-img_about.png";

export default function About() {
  return (
    <main className="main">
      <section className="background">
        <img
          src={backgroundImgAbout}
          alt="mountains"
          className="background-img"
        />
      </section>
      <section className="info">
        <button className="dropbtn">
          Fiabilité&emsp;<i className="fas fa-chevron-down"></i>
          <i className="fas fa-chevron-up"></i>
        </button>
        <p className="text">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
        <button className="dropbtn">
          Respect&emsp;<i className="fas fa-chevron-down"></i>
          <i className="fas fa-chevron-up"></i>
        </button>
        <p className="text">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
        <button className="dropbtn">
          Service&emsp;<i className="fas fa-chevron-down"></i>
          <i className="fas fa-chevron-up"></i>
        </button>
        <p className="text">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
        <button className="dropbtn">
          Sécurité&emsp;<i className="fas fa-chevron-down"></i>
          <i className="fas fa-chevron-up"></i>
        </button>
        <p className="text">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </section>
    </main>
  );
}
