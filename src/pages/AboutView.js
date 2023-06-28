import backgroundImgAbout from "../images/background-img_about.png";
import DropdownBtn from "../components/DropdownBtn";
import data from "./data_about.json";

export default function AboutView() {
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
        {data.map((item) => (
          <DropdownBtn
            className="dropmenu__about"
            key={item.name}
            name={item.name}
            text={item.text}
          />
        ))}
      </section>
    </main>
  );
}
