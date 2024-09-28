
export default function Contact() {
    return (
        <section className="contact-section" id='contact'>
            <div className="contact-heading">
                <h2>Contact <span>Me</span></h2>
                <p>I’d love to hear from you! Whether you have a project in mind, a question, or just want to connect, feel free to reach out. Let’s collaborate and create something amazing together!</p>
            </div>
            <div className="contact-info">
                <div className="contact-details">
                    <h3>Address: <span>House No. 387 D-Block Faisal Town, Lahore, Punjab, Pakistan</span></h3>
                    <h3>Phone: <span>+92 305 5543745</span></h3>
                    <h3>E mail: <span>tanveer.iqbal1056@gmail.com</span></h3>
                    <h3>Website: <span>terasoft.com.pk</span></h3>
                </div>
                <div className="contact-box">
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Message' />
                    <div className="contact-btn">
                        <button onClick={() => window.location.href = 'tel:+923055543745'}>Contact Me</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
