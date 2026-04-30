import Header from './components/Header'
import Footer from './components/Footer'

function Signup({ user, setUser }) {

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
    <Header />
        <div>Signup</div>
        <div className="signup-page">
  <h1>SIGN UP</h1>
  <form className="signup-form" onSubmit={handleSubmit}>
     <label htmlFor="firstname">First name: </label>
    <input type="text" name="firstname" id="firstname" placeholder="First name" required/>
    <br />
     <label htmlFor="lastname">Last name: </label>
    <input type="text" name="lastname" id="lastname" placeholder="Last name" required/>
    <br />
    <label htmlFor="username">Username: </label>
    <input type="text" name="username" id="username" placeholder="Username" required/>
    <br />
    <br />
    <label htmlFor="password">Password: </label>
    <input type="password" name="password" id="password" placeholder="Password" required></input>
    <br />
    <br />
    <input type="submit" defaultValue="Submit" />
  </form>
</div>
<Footer />
    </>

  )
}

export default Signup