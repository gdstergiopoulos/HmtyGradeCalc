import Header from "./Header";
import Footer from "./Footer";
function Contact(){
    return(
        <>
        <Header/>
        <div className="contact">
            <h1>Contact</h1>
            <p>
                If you have any questions or concerns, please feel free to contact us at: <br></br>
                Email:  <a href="mailto:gstergiopoulos@ac.upatras.gr">gstergiopoulos@ac.upatras.gr</a>
            </p>
        </div>
        <Footer/>
        </>
    )
}

export default Contact;