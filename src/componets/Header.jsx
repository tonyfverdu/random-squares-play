import './Header.css'

function Header(props) {
  return (
    <header className="headerTitle">
    <h2 className="title">
      {props.title}
    </h2>
    <h5 className="subtitle">
      {props.subtitle}
    </h5>
  </header>
  )
}

export default Header;
