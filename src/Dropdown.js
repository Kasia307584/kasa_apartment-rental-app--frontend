export default function Dropdown(props) {
  const { className, name, text } = props;

  return (
    <article className={`dropmenu ${className}`}>
      <button className="dropbtn">
        {name}
        <i className="fas fa-chevron-down"></i>
        <i className="fas fa-chevron-up"></i>
      </button>
      <ul className="text">{text}</ul>
    </article>
  );
}
