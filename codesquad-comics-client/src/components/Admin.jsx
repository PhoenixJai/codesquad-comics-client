import { useState, useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

function Admin() {

    const [books, setBooks] = useState([]);

 useEffect(() => {
      setBooks(booksData);

    }, []);

  return (
    <>
    <Header />
        <div>Admin</div>
        <main>
         
   <div className="admin-page">
     <div className="admin-it">
       <h1>ADMIN PAGE</h1>
        <button type="button">ADD NEW COMIC</button>
        <br />
        <br />
     </div>
    
     <section className="comicTable">
       <table className="thecomicTable">
         <tr>
           <th>COMIC TITLE</th>
           <th>EDIT</th>
           <th>DELETE</th>
         </tr>

</table>
</section>
</div>
</main>
<Footer />
      
    </>

  )
}

export default Admin