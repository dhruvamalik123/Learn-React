import "../index.css";
const Contents = (props) => {
  return (
    <div>
      <div className="mid">
        <img src={props.image} alt="Todo" />
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default Contents;
