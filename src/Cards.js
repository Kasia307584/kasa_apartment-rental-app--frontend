import data from "./data.json";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <section className="announcements">
      {data.map((item) => (
        <>
          <p className="cover-title">{item.title}</p>
          <div>
            <Link to="/details">
              <img
                src={item.cover}
                alt="appartement"
                className="cover-img"
              ></img>
            </Link>
          </div>
        </>
      ))}
    </section>
  );
}
