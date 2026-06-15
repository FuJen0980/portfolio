function Navbar() {
  return (
    <nav>
      <div className="logo">yourname<span className="dot">.dev</span></div>
      <ul className="nav-links">
        <li><a href="#home">home</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar