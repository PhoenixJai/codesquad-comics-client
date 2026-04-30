import Header from './components/Header'
import Footer from './components/Footer'

function Login({ user, setUser }) {

  const handleSubmit = (e) => {
     e.preventDefault();
      console.log("yay handleSubmit ran!");
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    console.log(e.target.submit.value);
    console.log(e.target.title.value);
    console.log(e.target.title.value);
  }

  return (
    <>
    <Header />
        <div>Login</div>
        <div className="login-page">
  <h1>LOGIN</h1>
  <form className="login-form" onSubmit={handleSubmit}>
    <label htmlFor="email">Email address: </label>
    <input type="email" name="email" id="email" placeholder="Email" required/>
    <br />
    <br />
    <label htmlFor="password">Password: </label>
    <input
      type="password"
      name="password"
      id="password"
      placeholder="Password"
    required/>
    <br />
    <br />
    <input type="submit" defaultValue="Submit"/>
  </form>
</div>
<Footer />

    </>

  )
}

export default Login