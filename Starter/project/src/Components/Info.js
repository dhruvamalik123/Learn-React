import "../index.css";
import Card from "./Card";
import Contents from "./Contents";
const Info = (props) => {
  console.log("Hello there");
  return (
    <Card className="concepts">
      {props.concepts.map((item) => (
        <li className="concept" key={item.title}>
          <Contents
            image={item.image}
            title={item.title}
            description={item.description}
          />
        </li>
      ))}
    </Card>
  );
};
export default Info;
// {
//   props.expenses.map((item) => (
//     <Card>
//       <ExpenseItem expenseitem={item} />
//     </Card>
//   ));
// }
