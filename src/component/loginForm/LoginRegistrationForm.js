import React, { useState } from 'react';

const LoginRegistrationForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login or registration logic here
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">{isLoginForm ? 'Login' : 'Register'}</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="usernameEmail" className="form-label">
                    Username/Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="usernameEmail"
                    name="usernameEmail"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    {isLoginForm ? 'Login' : 'Register'}
                  </button>
                </div>
                <div className="text-center mt-3">
                  <button type="button" className="btn btn-link" onClick={toggleForm}>
                    {isLoginForm ? 'Register' : 'Login'}
                  </button>
                </div>
                {!isLoginForm && (
                  <div className="text-center mt-3">
                    <button type="button" className="btn btn-link">
                      Forgot Password?
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegistrationForm;
