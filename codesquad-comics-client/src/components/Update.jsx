import { useState, useEffect } from 'react';
import booksData from "../data/books.js"

function Update() {
  const id = 1;
    
  const [book, setBook] = useState({});

  useEffect(() => {
    const findBook = booksData.find((b) => b.id === id);
    setBook(findBook);
  }, []);


    const handleSubmit = (e) => {
      e.preventDefault();
    
    console.log("yay handleSubmit ran!");
    console.log(e.target.firstname.value);
    console.log(e.target.lastname.value);
    console.log(e.target.username.value);
    console.log(e.target.password.value);
  }

  return (
    <>
        <div>Update</div>
        <main>
    
  <h1>UPDATE COMIC</h1>
  <form onSubmit={handleSubmit}>
    <label htmlFor="title">Title: </label>
    <input
      type="text"
      id="title"
      name="title"
      defaultValue="title value stored in the database"
    required/>
    <br />
    <br />
    <label htmlFor="author">Author: </label>
    <input
      type="text"
      id="author"
      name="author"
      defaultValue="author value stored in the database"
    required/>
    <br />
    <br />
    <label htmlFor="publisher">Publisher: </label>
    <select id="publisher" name="publisher">
      <option value="" disabled="" selected="">
        publisher value stored in the database
      </option>
      <option value="option1">BOOM! Box</option>
      <option value="option2">DC Comics</option>
      <option value="option3">Harry N. Abrams</option>
      <option value="option4">Icon Books</option>
      <option value="option5">Image Comics</option>
      <option value="option6">Marvel</option>
      <option value="option7">Simon &amp; Schuster</option>
      <option value="option8">Top Shelf Productions</option>
      <option value="option9">VIZ Media LLC</option>
    </select>
    <br />
    <br />
    <label htmlFor="genre">Genre: </label>
    <input
      type="text"
      id="genre"
      name="genre"
      defaultValue="genre data stored in the database"
    required/>
    <br />
    <br />
    <label htmlFor="numberOfPages">Number of pages: </label>
    <input
      type="text"
      id="numberOfPages"
      name="numberOfPages"
      defaultValue={255}
    required/>
    <br />
    <br />
    <label htmlFor="rating">Rating: </label>
    <input
      type="number"
      id="rating"
      name="rating"
      min={1}
      max={5}
      defaultValue={5}
    required/>
    <br />
    <br />
    <label htmlFor="synopsis">Synopsis: </label>
    <textarea
      id="synopsis"
      name="synopsis"
      placeholder="synopsis value stored in the database"
      defaultValue={""}
    />
    <br />
    <br />
    <br />
    <input type="submit" defaultValue="Submit" required/>
  </form>
  <br />


        </main>
    </>

  )
}

export default Update