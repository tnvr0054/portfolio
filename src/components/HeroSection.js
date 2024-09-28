
function HeroSection() {
    return (
        <>
            <section className="hero-section" id='home'>
                <div className="info">
                    <h6>Hello, Welcome</h6>
                    <h1>I'm Tanveer <br /> Iqbal</h1>
                    <p>TI'm a passionate MERN stack developer dedicated to building dynamic web applications. With a strong focus on user experience and modern technologies, I transform ideas into responsive, efficient solutions. Let’s create something amazing together!</p>
                    <button onClick={()=>window.location.href = 'tel:+923055543745'}>Contact Me</button>
                </div>
                <div className="hero-img">
                    <img src="./avatar-profile.png" alt="square" />
                </div>
            </section>
        </>
    )
}

export default HeroSection;