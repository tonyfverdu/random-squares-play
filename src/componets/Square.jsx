import Card from "./Card.jsx";
import './Square.css';

const Square = (props) => (
  <div className="square" style={{ backgroundColor: props.color.color }}>
    <Card
      color={props.color}
    />
  </div>
)

export default Square;