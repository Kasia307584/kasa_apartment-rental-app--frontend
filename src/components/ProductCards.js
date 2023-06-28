import data from "../data.json";
import { Link } from "react-router-dom";

export default function ProductCards() {
  return (
    <section className="announcements">
      {data.map((item) => (
        <div className="cover-wrapper" key={`card-${item.id}`}>
          <div>
            <Link to={`/details/${item.id}`}>
              <img
                src={item.cover}
                alt="appartement"
                className="cover-img"
              ></img>
            </Link>
          </div>
          <p className="cover-title">{item.title}</p>
        </div>
      ))}
    </section>
  );
}
