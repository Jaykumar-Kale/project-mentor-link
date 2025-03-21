/*
    Fname,Lname,mobileNo,email,password.

    
*/

function Register() {
  return (
    <div class="container mt-5">
      <div class="card">
        <div class="card-header bg-success text-white">Register</div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="firstName" class="form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="lastName" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder="Enter your last name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="mobileNo" class="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                class="form-control"
                id="mobileNo"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div class="mb-3">
              <label for="registerEmail" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="registerEmail"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="registerPassword" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="registerPassword"
                placeholder="Set a password"
                required
              />
            </div>
            <button type="submit" class="btn btn-success">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
