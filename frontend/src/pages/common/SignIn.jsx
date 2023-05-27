import React from 'react'
import axios from 'axios';
import { useEffect, useContext } from 'react';
import './styles.css'
import { AuthContext } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // JavaScript for disabling form submissions if there are invalid fields
    (() => {
      'use strict'
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      })
    })()

    const userData = {
      email,
      password
    };

    // Send the login request
    axios.post('http://localhost:5000/api/users/login', userData)
      .then((response) => {
        setEmail('');
        setPassword('');

        // Get the token and role from the response
        const { token, role } = response.data;

        // Call the login function from the context to set the token and role
        login(token, role);
        console.log(role)

        if (role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/');
        }
      })
      .catch((error) => {
        alert('Please check your email or password');
      });
  }
  return (
    <div style={{ margin: "auto", width: '100%' }}>
      <main className="form-signin">
        <form>
          {/* <img className="mb-4" src="" alt="" width="72" height="57" style={{margin: 'auto', display: 'block'}}/> */}
          <div className="site-logo mt-5 mb-5" style={{ textAlign: 'center' }}>
            <h2>ISLAND ODYSSEY</h2>
          </div>
          <h1 className="h3 mb-3 fw-normal" style={{ textAlign: 'center' }}>Please sign in</h1>
          <div className="form-floating pb-2">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating pb-2">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <label for="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Sign In</button>
        </form>
      </main>
    </div>
  )
}
