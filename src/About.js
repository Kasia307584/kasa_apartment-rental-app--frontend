import data from "./data.json";

export default function About() {
  console.log(data);
  return (
    <div>
      <h2>About</h2>
      <p>
        {data.map((item) => (
          <p>{item.title}</p>
        ))}
      </p>
    </div>
  );
}
