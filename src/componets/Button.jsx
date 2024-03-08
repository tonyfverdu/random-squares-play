import './Button.css'

function Button(props) {
  return (
    <button
      className="btnRandom"
      onClick={props.onClick}
    >
      {props.textButton}
    </button>
  )
}

export default Button;
