function Header({ user, setUser }) {
  return (
    <>
     <div>Header</div>
    <header>
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CodeSquad Comics</title>
  <link rel="stylesheet" href="public/styles/styles.css" />
  {/* Google Fonts */}
  {/* Fredericka the Great */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
    rel="stylesheet"
  />
  {/* Google Fonts */}
  <header className="header">
    <a href="index.html">
      <img
        src="public/images/CodeSquad-Comics-logo.png"
        alt="CodeSquad Comics Logo"
      />
    </a>
    <nav className="navbar about-navbar">
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">LOGIN</a>
        </li>
      </ul>
    </nav>
  </header>
  <div className="about-page">
    <section className="codeSquadComics aboutCodeSquad">
      <h1>ABOUT CODESQUAD COMICS</h1>
      <p>
        CodeSquad Comics is a collection of graphic novels read by Jaiden.
        Copyrighted images are used for review purposes only. Meta information
        about this collection can be found below. A detailed list of all the
        graphic novels in this collection can be found on the homepage.
        Additional details about each comic book, including the author, genre,
        number of pages, and a brief synopsis, can be found by navigating to the
        homepage and clicking the image of the book cover or the Details link
        for the desired graphic novel.
      </p>
    </section>
    <section className="collectionDetails">
      <h2>COLLECTION DETAILS</h2>
      <ul>
        <li>total comic books: 12</li>
        <li>latest additions: 12</li>
        <li>5-star ratings: 5</li>
        <li>publishers: 9</li>
      </ul>
    </section>
  </div>
  <footer className="footer">
    <section className="visit">
      <h2>VISIT US</h2>
      <p>
        CodeSquad Comics
        <br />
        123 Dorchester Avenue
        <br /> Boston, MA 02124
      </p>
    </section>
    <section className="footerLinks">
      <h2>LINKS</h2>
      <a href="#">HOME</a> <br />
      <a href="#">ABOUT</a> <br />
      <a href="#">LOGIN</a> <br />
    </section>
    <section className="followUS">
      <h2>FOLLOW US</h2>
      <a href="#">Facebook</a>
      <br />
      <a href="#">Instagram</a>
      <br />
      <a href="#">Twitter</a>
      <br />
    </section>
    <section className="productOF">
      <h2>A PRODUCT OF</h2>
      <a target="_blank" rel="noopener noreferrer" href="http://codesquad.org/">
        <img src="public/images/CodeSquad-logo-b.png" alt="CodeSquad Logo" />
      </a>
    </section>
  </footer>
</>

    </header>
    </>
   
  )
}

export default Header