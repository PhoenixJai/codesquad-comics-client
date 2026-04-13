

function Admin() {
  return (
    <>
    <Header />
        <div>Admin</div>
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

         <tr id="batmad">
           <td>Batman: The Dark Knight Returns</td>
           <td><input type="button" value="EDIT"/></td>
           <td><input type="button" value="DELETE"/></td>
         </tr>

         <tr id="blackPanther">
           <td>Black Panther: A Nation Under Our Feet Book 1</td>
           <td><input type="button" value="EDIT"/></td>
           <td><input type="button" value="DELETE"/></td>
         </tr>

         <tr id="funHome">
           <td>Fun Home: A Family Tragicomic</td>
           <td><input type="button" value="EDIT"/></td>
           <td><input type="button" value="DELETE"/></td>
         </tr>

         <tr id="hunter">
           <td>Hunter X Hunter Vol. 1</td>
           <td><input type="button" value="EDIT" /></td>
           <td><input type="button" value="DELETE"/></td>
         </tr>

         <tr id="lumberjanes">
           <td>Lumberjanes Vol. 1</td>
           <td><input type="button" value="EDIT"/></td>
           <td><input type="button" value="DELETE"/></td>
         </tr>

         <tr id="march">
           <td>March: Book One</td>
           <td><input type="button" value="EDIT"/></td>
           <td><input type="button" value="DELETE"/></td>
         </tr>

         <tr id="onePiece">
           <td>One Piece, Vol. 1: Romance Dawn</td>
           <td><input type="button" value="EDIT"/></td>
           <td><input type="button" value="DELETE"/></td>
         </tr>

         <tr id="sower">
           <td>Parable of the Sower</td>
           <td><input type="button" value="EDIT"/></td>
           <td><input type="button" value="DELETE"/></td>
         </tr>

         <tr id="queer">
           <td>Queer: A Graphic History</td>
           <td><input type="button" value="EDIT"/></td>
           <td><input type="button" value="DELETE"/></td>
         </tr>

         <tr id="tWD">
           <td>The Walking Dead, Vol. 1: Days Gone Bye</td>
           <td><input type="button" value="EDIT"/></td>
           <td><input type="button" value="DELETE"/></td>
         </tr>

         <tr id="wake">
           <td>Wake: The Hidden History of Women-Led Slave Revolts</td>
           <td><input type="button" value="EDIT"/></td>
           <td><input type="button" value="DELETE"/></td>
         </tr>

         <tr id="watchmen">
           <td>Watchmen</td>
           <td><input type="button" value="EDIT"/></td>
           <td><input type="button" value="DELETE"/></td>
         </tr>

       </table>
     </section>
     <br />
   </div>
  

  <footer className="footer">
    <section className="visit">
      <h2>VISIT US</h2>

      <p>CodeSquad Comics<br />123 Dorchester Avenue<br /> Boston, MA 02124</p>
    </section>

    <section className="footerLinks">
      <h2>LINKS</h2>
        <a href="index.html">HOME</a>  <br />
        <a href="about.html">ABOUT</a> <br />
        <a href="login.html">LOGIN</a> <br />
    </section>

    <section className="followUS">
      <h2>FOLLOW US</h2>
      <a href="#">Facebook</a><br />
      <a href="#">Instagram</a><br />
      <a href="#">Twitter</a><br />
    </section>



  <section className="productOF">
      <h2>A PRODUCT OF</h2>
      <a target="_blank" rel="noopener noreferrer" href="http://codesquad.org/"><img src="public/images/CodeSquad-logo-b.png" alt="CodeSquad Logo" /></a>
    </section>
  </footer>
        </main>
        <Footer />
    </>

  )
}

export default Admin