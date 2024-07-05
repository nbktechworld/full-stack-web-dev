import '../components/signup.css';
import '../global.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Signup(){
    const [ inputs, setInputs ] = useState({
        name: '',
        email: '',
        password: '',
        dateOfBirth: '',
        biography: '',
        notificationPreference: '',
        agreeToTerms: false,
        subscribeToNewsletter: false
    });

    const { name, email, password, dateOfBirth, biography, notificationPreference, agreeToTerms, subscribeToNewsletter } = inputs;
    const navigate = useNavigate()

    const onChange = e => {
      setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

  const checkState = e =>{
    setInputs({...inputs, [e.target.name]: e.target.checked});
    }

    const onSubmit = async (e) => {
      e.preventDefault();
      const body = { name, email, password, dateOfBirth, biography, notificationPreference, agreeToTerms, subscribeToNewsletter };
      try {
        const r = await fetch('http//localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body),
        });

        if(r.ok === false){
          throw new Error('response sent back an error');
        };
        navigate('/signin');

      } catch (error) {
       console.error(error.message);
      }
    }

  return (
    <>
      <nav aria-label="breadcrumb" className="breadcrumb">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><span aria-current="page">Sign-up</span></li>
        </ul>
      </nav>
      <div id="main-container">
        <form id="sign-up-form" onSubmit={ onSubmit }>
          <div className="form-group">
            <label htmlFor="sign-up-form-name">Name</label>
            <input type="text" id="sign-up-form-name" name="name" value={name} onChange={onChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="sign-up-form-email">Email</label>
            <input type="email" name="email" required id="sign-up-form-email" value={email}  onChange={onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="sign-up-form-password">Password</label>
            <input type="password" name="password" id="sign-up-form-password" value={password}  onChange={onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="sign-up-form-dob">Date of Birth</label>
            <input type="date" name="dateOfBirth" id="sign-up-form-dob" value={dateOfBirth}  onChange={onChange}/>
          </div>
          <div className="form-group">
            <label>Notification Preference</label>
            <label><input type="radio" name="notificationPreference" value='email' onChange={onChange} checked={notificationPreference==='email'}/> Email</label>
            <label><input type="radio" name="notificationPreference" value='phone' onChange={onChange} checked={notificationPreference==='phone'}/> Phone</label>
            <label><input type="radio" name="notificationPreference" value='none' onChange={onChange} checked={notificationPreference==='none'}/> None</label>
          </div>

          <div className="form-group">
            <label htmlFor="sign-up-form-bio">Write About Yourself</label>
            <textarea name="biography" id="sign-up-form-bio" rows="3" value={biography} onChange={e => onChange(e)}></textarea>
          </div>
          <div className="form-group">
            <div>
              <label><input type="checkbox" name="agreeToTerms" onChange={checkState} /> I agree to the terms and conditions</label>
            </div>
            <div>
              <label><input type="checkbox" name="subscribeToNewsLetter" onChange={checkState}  /> Subscribe to newsletter</label>
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
