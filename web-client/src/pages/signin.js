import '../components/signin.css';
import '../components/signup.css';
import '../global.css';

export default function Signin(){
  return (
    <form action="https://jsonplaceholder.typicode.com/users" method="POST" id="sign-in-form">
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" required/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password"/>
      </div>
      <div>
        <input type="submit" value="Sign In"/>
      </div>
      <div className="forget-password-container">
        <a href="reset-password.html">I forget my password</a>
      </div>
    </form>
  )
}
