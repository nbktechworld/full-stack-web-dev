import '../components/signup.css';
import '../global.css';

export default function Signup(){
  return (
    <>
      <nav aria-label="breadcrumb" className="breadcrumb">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><span aria-current="page">Sign-up</span></li>
        </ul>
      </nav>
      <div id="main-container">
        <form action="https://jsonplaceholder.typicode.com/users" method="POST" id="sign-up-form">
          <div className="form-group">
            <label for="sign-up-form-name">Name</label>
            <input type="text" id="sign-up-form-name" name="name" required/>
          </div>
          <div className="form-group">
            <label for="sign-up-form-email">Email</label>
            <input type="email" name="email" required id="sign-up-form-email"/>
          </div>
          <div className="form-group">
            <label for="sign-up-form-password">Password</label>
            <input type="password" name="password" id="sign-up-form-password"/>
          </div>
          <div className="form-group">
            <label for="sign-up-form-dob">Date of Birth</label>
            <input type="date" name="dateOfBirth" id="sign-up-form-dob"/>
          </div>
          <div className="form-group">
            <label>Notification Preference</label>
            <label><input type="radio" name="notificationPreference"/> Email</label>
            <label><input type="radio" name="notificationPreference"/> Phone</label>
            <label><input type="radio" name="notificationPreference"/> None</label>
          </div>
          
          <div className="form-group">
            <label for="sign-up-form-bio">Write About Yourself</label>
            <textarea name="biography" id="sign-up-form-bio" rows="3"></textarea>
          </div>
          <div className="form-group">
            <div>
              <label><input type="checkbox" name="agreeToTerms" value="true"/> I agree to the terms and conditions</label>
            </div>
            <div>
              <label><input type="checkbox" name="subscribeToNewsLetter"/> Subscribe to newsletter</label>
            </div>
          </div>
          <div>
            <input type="submit" value="Sign Up"/>
          </div>
        </form>
      </div>
    </>
  );
}
