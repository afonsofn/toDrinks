import './style.scss'

function Header() {
  return (
    <div className="parallax-container">
      <div className="parallax"><img src="drinks.png" alt="Imagem_parallax" /></div>
      <div className="header">
        <div>
          <h1>toDrinks</h1>
          <h5>Refresh your life withs our drinks</h5>
        </div>
      </div>
    </div>
  )
}

export default Header;