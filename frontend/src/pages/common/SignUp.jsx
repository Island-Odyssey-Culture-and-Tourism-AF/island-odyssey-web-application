import React from 'react'
import axios from 'axios';

export default function SignUp() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userType, setUserType] = React.useState('');

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
      password,
      role: userType === 'admin' ? 'admin' : 'user' // Set the userType value based on the checkbox value
    };
    console.log(userData)
    // Send the registration request
    axios.post('http://localhost:5000/api/users/register', userData)
      .then((response) => {
        setEmail('');
        setPassword('');

        // Success
        alert('Successfully registered');
        // Redirect to the appropriate login page based on the userType
        window.location.replace('/sign-in');
      })
      .catch((error) => {
        // Handle the error
        alert('An error occurred. Please try again.');
      });
  };
  return (
    <div>
      <div style={{ margin: "auto", width: '25%' }}>
        <main className="form-signin">
          <form>
            {/* <img className="mb-4" src="" alt="" width="72" height="57" style={{margin: 'auto', display: 'block'}}/> */}
            <div className="site-logo mt-5 mb-5" style={{ textAlign: 'center' }}>
              <h2>ISLAND ODYSSEY</h2>
            </div>
            <h1 className="h3 mb-3 fw-normal" style={{ textAlign: 'center' }}>Register</h1>
            <div className="form-floating pb-2">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating pb-2">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3" style={{ textAlign: 'start' }}>
              <label>
                <input type="checkbox" value="admin" onChange={(e) => setUserType(e.target.value)} /> As an admin
              </label>
            </div>
            <div className="checkbox mb-4" style={{ textAlign: 'start' }}>
              <label>
                <input type="checkbox" value="user" onChange={(e) => setUserType(e.target.value)} /> As a user
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Sign Up</button>
          </form>
        </main>
      </div>
    </div>
  )
}
