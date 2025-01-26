
/*
    Fname,Lname,mobileNo,email,password.
*/

function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/login", {
//         email,
//         password,
//       });
//       console.log("Login successful", response.data);
//     } catch (error) {
//       console.error("Login failed", error);
//     }
//   };

  return (
    <div>
      <h2>Register</h2>
      <input type="email" placeholder="Email"  />
      <input type="password" placeholder="Password"  />
      <button >Login</button>
    </div>
  );
}

export default Register;