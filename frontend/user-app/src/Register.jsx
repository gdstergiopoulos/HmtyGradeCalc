import Header from "./Header";
import Footer from "./Footer";

function Register(){
    return(
        <>
        <Header/>
        <div className="register" class="registerform">
            <h1>Register</h1>
            <form action="" method="post">
                <input class="form-control" type="text" placeholder="Username"/>
                <br></br>
                <input class="form-control" type="email" placeholder="Email"/>
                <br></br>
                <input class="form-control" type="password" placeholder="Password"/>
                <br></br>
                <input class="form-control" type="password" placeholder="Confirm Password"/>
                <br></br>
                <button class="btn btn-dark" type="submit">Register</button>
                <p>Already have an account? <a href="/myprof">Login</a></p>
            </form>
        </div>
        
        <Footer/>
        </>
    );
}

export default Register;