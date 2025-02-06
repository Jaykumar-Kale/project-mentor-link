
function Login() {
  return (
    
    <div class="container mt-5">
        <div class="card mb-4">
            <div class="card-header bg-primary text-white">Login</div>
            <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label for="loginEmail" class="form-label"> Email </label>
                        <input type="email" class="form-control" id="loginEmail" placeholder="Enter your email" required />
                    </div> 
                    <div class="mb-3">
                        <label for="loginPassword" class="form-label"> Password </label>
                        <input type="password" class="form-control" id="loginPassword" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" class="btn btn-primary"> Login </button>
                </form>
            </div>
        </div>
    </div>


  );
}

export default Login;