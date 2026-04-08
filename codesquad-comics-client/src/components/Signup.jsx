import Header from './components/Header'
import Footer from './components/Footer'

function Signup() {
  return (
    <>
    <Header />
        <div>Signup</div>
        <div className="login-page">
  <h1>LOGIN</h1>
  <form className="login-form">
     <label htmlFor="unknown1">Email address: </label>
    <input type="email" name="email" id="email" placeholder="Email" />
    <br />
     <label htmlFor="unknown2">Password: </label>
    <input type="password" name="password" id="password" placeholder="Password" />
    <br />
    <label htmlFor="email">Email address: </label>
    <input type="email" name="email" id="email" placeholder="Email" />
    <br />
    <br />
    <label htmlFor="password">Password: </label>
    <input
      type="password"
      name="password"
      id="password"
      placeholder="Password"
    />
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