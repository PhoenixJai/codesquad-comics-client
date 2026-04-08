import Header from './components/Header'
import Footer from './components/Footer'

function About() {
  return (
    <>
    <Header />
        <div>About</div>
        <main>
            
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


  <div className="about-page">
    <section className="codeSquadComics aboutCodeSquad">
          <h1>ABOUT CODESQUAD COMICS</h1>
          <p>CodeSquad Comics is a collection of graphic novels read by Jaiden. Copyrighted images are used htmlhtmlFor review purposes only. Meta inhtmlFormation about this collection can be found below. A detailed list of all the graphic novels in this collection can be found on the homepage. Additional details about each comic book, including the author, genre, number of pages, and a brief synopsis, can be found by navigating to the homepage and clicking the image of the book cover or the Details link htmlFor the desired graphic novel.</p>
        </section>
    
        <section className="collectionDetails">
      <h2>COLLECTION DETAILS</h2>
      <ul>
        <li>
          total comic books: 12
        </li>
        <li>
          latest additions: 12
        </li>
        <li>
          5-star ratings: 5
        </li>
        <li>
          publishers: 9
        </li>
      </ul>
    </section>

  </div>
  

  <footer className="footer">
    <section className="visit">
      <h2>VISIT US</h2>

      <p>CodeSquad Comics<br />123 Dorchester Avenue<br /> Boston, MA 02124</p>
    </section>

    <section className="footerLinks">
      <h2>LINKS</h2>
        <a href="index.html">HOME</a>  <br/>
        <a href="about.html">ABOUT</a> <br/>
        <a href="login.html">LOGIN</a> <br/>
    </section>

    <section className="followUS">
      <h2>FOLLOW US</h2>
      <a href="#">Facebook</a><br />
      <a href="#">Instagram</a><br />
      <a href="#">Twitter</a><br />
    </section>
 


  <section className="productOF">
      <h2>A PRODUCT OF</h2>
      <a target="_blank" rel="noopener noreferrer" href="http://codesquad.org/"><img src="public/images/CodeSquad-logo-b.png" alt="CodeSquad Logo"/></a>
    </section>
  </footer>

        </main>
        <Footer />
    </>

  )
}

export default About