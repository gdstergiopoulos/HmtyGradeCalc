import Header from "./Header";
import Footer from "./Footer";

function Login(){
    return(
        <>
        <Header/>
        <div className="login" class="loginform">
            <h1>Login</h1>
            <form action="" method="post">
                <input class="form-control" type="text" placeholder="Username"/>
                <br></br>
                <input class="form-control" type="password" placeholder="Password"/>
                <br></br>
                <button class="btn btn-dark" type="submit">Login</button>
                <p>Don't have an account? <a href="/register">Register</a></p>
            </form>
        </div>
        
        <Footer/>
        </>
    );
}

export default Login;