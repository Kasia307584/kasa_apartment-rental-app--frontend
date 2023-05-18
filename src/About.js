import backgroundImgAbout from "./images/background-img_about.png";
import Dropdown from "./Dropdown";

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
        <Dropdown
          className="dropmenu__about"
          name="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes."
        />
        <Dropdown
          className="dropmenu__about"
          name="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          className="dropmenu__about"
          name="Service"
          text="Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question."
        />
        <Dropdown
          className="dropmenu__about"
          name="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
          les standards sont bien respectés. Nous organisons également des
          ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </main>
  );
}
