import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import booksData from '../data/books';

function Home() {

  const [books, setBooks] = useState([]);


    useEffect(() => {
      setBooks(booksData);

    }, []);

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

    {books.map((book) => (
      <section key={book.id} className="comicBook">
      <p>
        <em>{book.title}</em>
        <br/>
        by {book.author}
        <br/>
        {book.rating} stars
        <br/>
        <a href="#">Details</a>
      </p>
      </section>
))}
  </section>
  
</div>
<Footer />
    </>
 
  )
}

export default Home