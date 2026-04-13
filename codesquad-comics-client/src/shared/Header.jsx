function Header({ user, setUser }) {
  return (
    <>
     <header className="header">
    <a href="index.html"><img src="public/images/CodeSquad-Comics-logo.png" alt="CodeSquad Comics Logo"/></a>
    <nav className="navbar about-navbar">
        <ul>
          <li><a href="index.html">HOME</a></li>
          <li><a href="about.html">ABOUT</a></li>
          <li><a href="login.html">LOGIN</a></li>
        </ul> 
    </nav>
  </header>
    </>
     )
}

export default Header