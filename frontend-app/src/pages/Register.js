
// Register.js
function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>First Name:</label>
        <input type="text" required />
        <label>Last Name:</label>
        <input type="text" required />
        <label>Mobile Number:</label>
        <input type="tel" required />
        <label>Email:</label>
        <input type="email" required />
        <label>Password:</label>
        <input type="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;