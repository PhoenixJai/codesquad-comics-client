function Footer () {
  return (
    <>
      <div>Footer</div>

      <footer className="footer">
        <section className="visitUS">
            <h2>VISIT US</h2>

            <p>CodeSquad Comics<br/>123 Dorchester Avenue<br/> Boston, MA 02124</p>
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
</>
)
}

export default Footer