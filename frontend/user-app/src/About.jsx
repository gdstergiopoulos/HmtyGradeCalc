import Header from "./Header";
import Footer from "./Footer";
function About(){
    return(
        <>
        <Header/>
        <div className="about">
            <h1>About Us</h1>
            <p>
                HmtyGrade is a platform that allows students to view their grades and statistics. 
                Our platform is designed to be user-friendly and easy to use. 
                We aim to provide students with a simple way to track their academic progress and stay on top of their grades.
            </p>
        </div>
        <Footer/>
        </>
    )
}

export default About;