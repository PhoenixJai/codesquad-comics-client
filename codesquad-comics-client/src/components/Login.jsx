import Header from './shared/Header'
import Footer from './shared/Footer'
function Login({ user, setUser }) {
  return (
    <>
    <Header />
        <div>Login</div>
        <div className="login-page">
  <h1>LOGIN</h1>
  <form className="login-form">
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

export default Login