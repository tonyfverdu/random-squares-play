import './Image.css';
function Image(props) {
  return (
    <figure className="figureImg" style={{ backgroundColor: props.color, width: props.width, height: props.height }}>
      <img src={props.img} alt={props.alt} />
    </figure>
  )
}

export default Image;
