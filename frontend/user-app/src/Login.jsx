import Header from "./Header";
import Footer from "./Footer";

function Login(){

    function handleSubmit(event){
        event.preventDefault();
        console.log("Login form submitted");
        fetch('/api/login/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: event.target[0].value,
                password: event.target[1].value
            })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

       
    }

    return(
        <>
        <Header/>
        <div className="login" class="loginform">
            <h1>Login</h1>
            <form onSumbit={handleSubmit}>
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