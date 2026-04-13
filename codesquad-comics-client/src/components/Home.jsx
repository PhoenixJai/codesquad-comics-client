
import { useState, useEffect } from 'react';
import books from '../data/books.js'


function Home() {
  const [theBooks, setTheBooks] = useState([]);

  useEffect(() => {
    setTheBooks(books);
  }, []);


  return (
    <>

       <div>Home</div>
      <>
    {
      theBooks.map((book) => {
      return (
        <section className="comicBook" key={book.id}>
          <h2>{book.Title}</h2>
          <img src={`public/images/${book.imageUrl}`} alt={book.Title} />
          
            <p>
          <em>{book.description}</em>
          <br/>
          by {book.author}
          <br/>
          {book.rating} stars
          <br/>
          <a href="#">Details</a>
        </p>
        </section>
      )
    })
    }
      
    </>
      

    </>
 
  )
}

export default Home