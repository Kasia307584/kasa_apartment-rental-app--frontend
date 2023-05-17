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
      <section className="about">
        <article className="dropmenu dropmenu__about">
          <button className="dropbtn">
            Fiabilité<i className="fas fa-chevron-down"></i>
            <i className="fas fa-chevron-up"></i>
          </button>
          <p className="text">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </article>
        <article className="dropmenu dropmenu__about">
          <button className="dropbtn">
            Respect<i className="fas fa-chevron-down"></i>
            <i className="fas fa-chevron-up"></i>
          </button>
          <p className="text">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </article>
        <article className="dropmenu dropmenu__about">
          <button className="dropbtn">
            Service<i className="fas fa-chevron-down"></i>
            <i className="fas fa-chevron-up"></i>
          </button>
          <p className="text">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </article>
        <article className="dropmenu dropmenu__about">
          <button className="dropbtn">
            Sécurité<i className="fas fa-chevron-down"></i>
            <i className="fas fa-chevron-up"></i>
          </button>
          <p className="text">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </article>
      </section>
    </main>
  );
}
