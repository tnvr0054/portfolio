

function Services() {
    return (
        <>
            <section className="services-section" id='services'>
                <div className="service-info">
                    <h2>My <span>Service</span></h2>
                    <p>As a versatile developer, I offer a range of services tailored to meet your project needs. From desktop applications to mobile and web solutions, I’m here to bring your ideas to life with cutting-edge technologies.</p>
                </div>
                {/* Service Cards */}
                <div className="service-cards">
                    <div className="service-card">
                        <div className="card-img">
                            <img src="./app-dev-removebg-preview.png" alt="App development logo"
                                style={{ width: '250px' }}
                            />
                        </div>
                        <div className="card-info">
                            <h3>App Development</h3>
                            <p>TLeverage the flexibility of React Native for your Android app development. I build responsive, high-performance mobile applications that engage users and enhance functionality, ensuring a smooth experience across devices. Bring your app idea to life with an intuitive design and robust features.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="card-img">
                            <img src="./web-dev-removebg-preview.png" alt="Web development logo" />
                        </div>
                        <div className="card-info">
                            <h3>Web Development</h3>
                            <p>Elevate your online presence with fast, modern websites built using Next.js. I focus on performance and SEO optimization, delivering responsive, user-friendly sites that stand out. Whether you need a personal portfolio or a complex web application, I’m here to help you succeed.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="card-img">
                            <img src="./Top-Custom-software-development.png" alt="Software Development"
                                style={{ width: '300px' }}
                            />
                        </div>
                        <div className="card-info">
                            <h3>Software Developer</h3>
                            <p>Create powerful desktop applications using Electron.js, combining the best of web technologies with native performance. I design and develop cross-platform apps that deliver a seamless user experience, making your software accessible on any operating system.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;