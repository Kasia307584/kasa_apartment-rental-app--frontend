import backgroundImg from "./images/background-img.png";
import Cards from "./Cards";

export default function Home() {
  return (
    <>
      <main className="main">
        <section className="background">
          <img src={backgroundImg} alt="mountains" className="background-img" />
          <h1 className="background-text">Chez vous, partout et ailleurs</h1>
        </section>

        <Cards />
      </main>
    </>
  );
}
