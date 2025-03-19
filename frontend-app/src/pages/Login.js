
import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="text-center mb-4">Welcome Back</h3>
              <Form>
                <Form.Group controlId="loginEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="loginPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mt-3"
                >
                  Login
                </Button>
              </Form>
              <div className="text-center mt-3">
                <a href="#" className="text-decoration-none">
                  Forgot password?
                </a>
              </div>
              <hr />
              <div className="text-center">
                <p className="mb-0">Don't have an account?</p>
                <Button variant="outline-primary" className="mt-2">
                  Register
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;




// function Login() {
//   return (
    
//     <div class="container mt-5">
//         <div class="card mb-4">
//             <div class="card-header bg-primary text-white">Login</div>
//             <div class="card-body">
//                 <form>
//                     <div class="mb-3">
//                         <label for="loginEmail" class="form-label"> Email </label>
//                         <input type="email" class="form-control" id="loginEmail" placeholder="Enter your email" required />
//                     </div> 
//                     <div class="mb-3">
//                         <label for="loginPassword" class="form-label"> Password </label>
//                         <input type="password" class="form-control" id="loginPassword" placeholder="Enter your password" required />
//                     </div>
//                     <button type="submit" class="btn btn-primary"> Login </button>
//                 </form>
//             </div>
//         </div>
//     </div>


//   );
// }

// export default Login;