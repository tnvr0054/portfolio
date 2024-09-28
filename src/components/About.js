
function About() {
    return (
        <>
            <section className="about-section" id='about'>
                <div className="about-img">
                    <img src="./avatar-profile.png" alt="square" />
                </div>
                <div className="about-info">
                    <h2>About <span>Me</span></h2>
                    <p>Hello! I’m a dedicated MERN stack developer with a passion for crafting dynamic web applications. With expertise in MongoDB, Express, React, and Node.js, I bring ideas to life through clean, efficient code.</p> <br /> <br />
                    <p>I prioritize user experience and responsiveness, ensuring every project not only looks great but functions seamlessly. Let’s collaborate to build innovative solutions that make a difference!</p>
                    <button onClick={()=>window.location.href = 'tel:+923055543745'}>Contact Me</button>
                </div>
            </section>
        </>
    )
}

export default About;