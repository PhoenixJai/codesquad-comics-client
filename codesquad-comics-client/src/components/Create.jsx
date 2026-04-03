function Create() {
  return (
    <>
        <div>Create</div>
        
        <main>
              

  <div className="create-page">
    <h1>CREATE NEW COMIC</h1>

      <form>
        <label htmlFor="title">Title: </label> 
        <input type="text" id="title" name="title" placeholder="Title"/>
    <br />
        <br />
        <label htmlFor="author">Author: </label> 
        <input type="text" id="author" name="author" placeholder="Author"/>

        <br />
        <br />
        <label htmlFor="publisher">Publisher: </label> 
        <select id="publisher" name="publisher">
          <option value="" disabled selected>Select</option>
          <option value="option1">BOOM! Box</option>
          <option value="option2">DC Comics</option>
          <option value="option3">Harry N. Abrams</option>
          <option value="option4">Icon Books</option>
          <option value="option5">Image Comics</option>
          <option value="option6">Marvel</option>
          <option value="option7">Simon & Schuster</option>
          <option value="option8">Top Shelf Productions</option>
          <option value="option9">VIZ Media LLC</option>

        </select>

        <br />
        <br />
        <label htmlFor="genre">Genre: </label> 
        <input type="text" id="genre" name="genre" placeholder="Genre"/>

        <br />
        <br />

        <label htmlFor="numberOfPages">Number of pages: </label> 
        <input type="text" id="numberOfPages" name="numberOfPages" placeholder="Number of pages"/>

        <br />
        <br />

        <label htmlFor="rating">Rating: </label> 
        <input type="number" id="rating" name="rating" min="1" max="5" />

        <br />
        <br />

        <label htmlFor="synopsis">Synopsis: </label> 
        <textarea id="synopsis" name="synopsis" placeholder="Synopsis"></textarea>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
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
      <a target="_blank" rel="noopener noreferrer" href="http://codesquad.org/"><img src="public/images/CodeSquad-logo-b.png" alt="CodeSquad Logo"/></a>
    </section>
  </footer>
        </main>
    </>

  )
}

export default Create