import {useState, useEffect} from 'react'

function Header() {
    const [activeLink, setActiveLink] = useState('home');

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            const { id } = section;
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                setActiveLink(id);
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (id) => {
        setActiveLink(id);
    };
    return (
        <>
            <div className="header">
                <h2>About <span>Me.</span></h2>
                <div className="nav-links">
                    <li><a className={activeLink === 'home' ? 'active' : 'inactive'} href='#home' onClick={() => handleClick('home')}>Home</a></li>
                    <li><a className={activeLink === 'about' ? 'active' : 'inactive'} href='#about' onClick={() => handleClick('about')}>About</a></li>
                    <li><a className={activeLink === 'services' ? 'active' : 'inactive'} href='#services' onClick={() => handleClick('services')}>Services</a></li>
                    <li><a className={activeLink === 'portfolio' ? 'active' : 'inactive'} href='#portfolio' onClick={() => handleClick('portfolio')}>Portfolio</a></li>
                    <li><a  className={activeLink === 'skills' ? 'active' : 'inactive'} href='#skills' onClick={() => handleClick('skills')}>Skills</a></li>
                    <li><a className={activeLink === 'contact' ? 'active' : 'inactive'} href='#contact' onClick={() => handleClick('contact')}>Contact</a></li>
                </div>
            </div>
        </>
    )
}

export default Header;