import react from "react";
 const Contact =()=>{
    return(
        <div className="main">
            <section className="contact-form">
                <h2 className="fade-in">Contact Us</h2>
                    <form>
                    <input type="text" placeholder="Full Name" required></input><br></br>
                    <input type="email" placeholder="Email Address" required></input><br></br>
                    <input type="number" placeholder="Phone Number" required></input><br></br>
                    <input type="text" placeholder="Address" required></input><br></br>
                    <textarea placeholder="Your Feedback" rows={5} ></textarea><br></br>
                    <button type="submit">Place Order</button>
                    </form>
                    
               

            </section>   
       
        </div>
    )
 }
 export default Contact;