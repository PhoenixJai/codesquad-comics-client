import Header from './components/Header'
import Footer from './components/Footer'

function Home() {
  return (
    <>
    <Header />
       <div>Home</div>
       <div className="index-container">
  <section className="codeSquadComics index-description">
    <h1>CODESQUAD COMICS</h1>
    <p>
      CodeSquad Comics is a collection of graphic novels read by Jaiden.
      Copyrighted images are used for review purposes only. Meta information
      about this collection can be found below. A detailed list of all the
      graphic novels in this collection can be found on the homepage. Additional
      details about each comic book, including the author, genre, number of
      pages, and a brief synopsis, can be found by navigating to the homepage
      and clicking the image of the book cover or the Details link for the
      desired graphic novel.
    </p>
  </section>
  <div className="index-page">
    <section className="comicCollection index-h2">
      <h2>COMPLETE COMIC COLLECTION</h2>
      <section className="comicBook" id="funHome">
        <img src="public/images/fun-home.jpg" alt="Fun Home" />
        <p>
          <em>Fun Home: A Family Tragicomic </em>
          <br />
          by Alison Bechdel
          <br /> 5 stars <br /> <a href="#">Details</a>
        </p>
      </section>
      <section className="comicBook" id="watchmen">
        <img src="public/images/watchmen.jpg" alt="watchemn comic" />
        <p>
          <em>Watchmen</em>
          <br />
          by Alan Moore
          <br /> 5 stars <br /> <a href="#">Details</a>
        </p>
      </section>
      <section className="comicBook" id="hunter">
        <img
          src="public/images/hunter-x-hunter.jpg"
          alt="Hunter X Hunter Vol. 1"
        />
        <p>
          <em>Hunter X Hunter Vol. 1</em>
          <br />
          by Yoshihiro Togashi 5 stars <br /> <a href="#">Details</a>
        </p>
      </section>
      <section className="comicBook" id="lumberjanes">
        <img src="public/images/lumberjanes.jpg" alt="Lumberjanes Vol. 1" />
        <p>
          <em>Lumberjanes Vol. 1</em>
          <br />
          by Noelle Stevenson
          <br /> 4 stars <br /> <a href="#">Details</a>
        </p>
      </section>
      <section className="comicBook" id="onePiece">
        <img src="public/images/one-piece.jpg" alt="One Piece, Vol. 1" />
        <p>
          <em>One Piece, Vol. 1: Romance Dawn</em>
          <br />
          by Eiichiro Oda
          <br /> 5 stars <br /> <a href="#">Details</a>
        </p>
      </section>
      <section className="comicBook" id="wake">
        <img src="public/images/wake.jpg" alt="Wake by Rebeca Hall" />
        <p>
          <em>Wake: The Hidden History of Women-Led Slave Revolts</em>
          <br />
          by Rebecca Hall
          <br /> 4 stars <br /> <a href="#">Details</a>
        </p>
      </section>
      <section className="comicBook" id="blackPanther">
        <img src="public/images/black-panther.jpg" alt="Black Panther Book 1" />
        <p>
          <em>Black Panther: A Nation Under Our Feet Book 1</em>
          <br />
          by Ta-Nehisi Coates
          <br /> 3 stars <br /> <a href="#">Details</a>
        </p>
      </section>
      <section className="comicBook" id="theWalkingDead">
        <img
          src="public/images/the-walking-dead.jpg"
          alt="The Walking Dead Vol. 1"
        />
        <p>
          <em>The Walking Dead, Vol. 1: Days Gone Bye</em>
          <br />
          by Robert Kirkman
          <br /> 4 stars <br /> <a href="#">Details</a>
        </p>
      </section>
      <section className="comicBook" id="march">
        <img src="public/images/march.jpg" alt="March: Book One" />
        <p>
          <em>March: Book One</em>
          <br />
          by John Lewis
          <br /> 5 stars <br /> <a href="#">Details</a>
        </p>
      </section>
      <section className="comicBook" id="batman">
        <img
          src="public/images/batman.jpg"
          alt="Batman: The Dark Knight Returns"
        />
        <p>
          <em>Batman: The Dark Knight Returns</em>
          <br />
          by Frank Miller
          <br /> 3 stars <br /> <a href="#">Details</a>
        </p>
      </section>
      <section className="comicBook" id="queer">
        <img src="public/images/queer.jpg" alt="Queer by Meg-John Barker" />
        <p>
          <em>Queer: A Graphic History</em>
          <br />
          by Meg-John Barker
          <br /> 4 stars <br /> <a href="#">Details</a>
        </p>
      </section>
      <section className="comicBook" id="parable">
        <img src="public/images/march.jpg" alt="Parable of the Sower" />
        <p>
          <em>Parable of the Sower</em>
          <br />
          by Octavia E. Butler
          <br /> 4 stars <br /> <a href="#">Details</a>
        </p>
      </section>
      <button>DISPLAY MORE</button>
    </section>
  </div>
</div>
<Footer />
    </>
 
  )
}

export default Home