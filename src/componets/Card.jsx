import './Card.css';

const Card = (props) => (
  <div className="card">
    <h3 className="cardTitle">{props.color.nameCSS}</h3>
    <p className="cardColor">{props.color.colorHEX}</p>
    <p className="cardRGB">{props.color.colorRGB}</p>
  </div>
)

export default Card;