
function Portfolio() {
    return (
        <>
            <section className="portfolio" id='portfolio'>
                <div className="portfolio-info">
                    <h2>My <span>Portfolio</span></h2>
                    <p>Explore my diverse range of projects that showcase my skills in software development, mobile apps, and web design. Each project reflects my commitment to quality and innovation, demonstrating how I bring ideas to life through technology.</p>
                    <div className="portfolio-img">
                        <div className='block-1'>
                            <img src="./portfolio-1.jpg" alt="" />
                        </div>
                        <div className="block-2">
                            <div className="block-3">
                                <img src="./portfolio-2.jpg" alt="" />
                                <img src="./portfolio-3.jpg" alt="" />
                            </div>
                            <div className="block-4">
                                <img src="./portfolio-4.jpg" alt="" />
                                <img src="./portfolio-5.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio;