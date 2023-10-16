import "./navbar.css"
const Navbar = () => {
  return (
    <nav>
      <div className="app__nav">
        <div className="app__nav-logo">
          <h1>
            Movie<span className="golden">Info</span>
          </h1>
        </div>
        <ul className="app__nav-list">
          <li className="app__nav-listitem">Home</li>
          <li className="app__nav-listitem">Movies</li>
          <li className="app__nav-listitem">Search</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
