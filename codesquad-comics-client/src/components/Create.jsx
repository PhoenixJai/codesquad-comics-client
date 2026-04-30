import Header from './components/Header'
import Footer from './components/Footer'

function Create() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("yay handleSubmit ran!");
    console.log(e.target.title.value);
    console.log(e.target.title.value);
    console.log(e.target.title.value);
    console.log(e.target.title.value);
    console.log(e.target.title.value);
  }
  return (
    <>
        <div>Create</div>
        <Header />
   
    
        <main>
              

  <div className="create-page">
    <h1>CREATE NEW COMIC</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label> 
        <input type="text" id="title" name="title" placeholder="Title" required/>
    <br />
        <br />
        <label htmlFor="author">Author: </label> 
        <input type="text" id="author" name="author" placeholder="Author" required/>

        <br />
        <br />
        <label htmlFor="publisher">Publisher: </label> 
        <select id="publisher" name="publisher" defaultValue="">
          <option value="" disabled>Select</option>
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
        <input type="text" id="genre" name="genre" placeholder="Genre" required/>

        <br />
        <br />

        <label htmlFor="numberOfPages">Number of pages: </label> 
        <input type="text" id="numberOfPages" name="numberOfPages" placeholder="Number of pages" required/>

        <br />
        <br />

        <label htmlFor="rating">Rating: </label> 
        <input type="number" id="rating" name="rating" min="1" max="5" required/>

        <br />
        <br />

        <label htmlFor="synopsis">Synopsis: </label> 
        <textarea id="synopsis" name="synopsis" placeholder="Synopsis" required></textarea>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
      <br />
  </div>
        </main>
        <Footer />
    </>

  )
}

export default Create