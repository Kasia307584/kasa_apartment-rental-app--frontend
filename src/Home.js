import backgroundImg from "./images/background-img.png";
import ProductCards from "./ProductCards";

export default function Home() {
  return (
    <>
      <main className="main">
        <section className="background">
          <img src={backgroundImg} alt="mountains" className="background-img" />
          <h1 className="background-text">
            Chez vous, <span id="break-point">partout et ailleurs</span>
          </h1>
        </section>

        <ProductCards />
      </main>
    </>
  );
}
