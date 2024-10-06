import Header from "./Header";
import Footer from "./Footer";

function Login(){

    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target[0].value);
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
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
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
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input className="form-control" type="text" name="username" placeholder="Username"/>
                <br></br>
                <input className="form-control" type="password" name="password" placeholder="Password"/>
                <br></br>
                <button className="btn btn-dark" type="submit">Login</button>
                <p>Don't have an account? <a href="/register">Register</a></p>
            </form>
        </div>
        
        <Footer/>
        </>
    );
}

export default Login;