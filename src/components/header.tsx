import { useNavigate } from 'react-router-dom';
import '../assets/logo/oranta-logo.png';
import { useEffect, useState } from 'react';
import OrantaLogo from '../assets/logo/oranta-logo.png';
import UKFlagIcon from '../assets/icons/uk-flag-icon.png';

export const Header = () => {
    const [menuDisplay, setMenuDisplay] = useState(true);
    const [burgerOpen, setBurgerOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuDisplay(true);
                setBurgerOpen(false);
            } else {
                setMenuDisplay(false);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    }

    const handleBurger = () => {
        setBurgerOpen(!burgerOpen);
    }



    return (
        <>
            <header className='header'>
                {menuDisplay && (
                    <>
                        <img src={OrantaLogo} alt="logo of oranta" className='header-logo'></img>
                        <nav>
                            <ul className="nav-items">
                                <li onClick={() => handleNavigation('/')}>Home</li>
                                <li onClick={() => handleNavigation('/science-technology')}>Science & Technology</li>
                                <li onClick={() => handleNavigation('/collaboration-partners')}>Collaboration Partners</li>
                                <li onClick={() => handleNavigation('/career')}>Career</li>
                                <li onClick={() => handleNavigation('/contact')}>Contact</li>
                                <li>
                                    <img src={UKFlagIcon} alt='icon of the uk flag' className='language-icon' />
                                </li>
                            </ul>
                            </nav>
                    </>
                )}
                
                {!menuDisplay && (
                    <>
                        <img src={OrantaLogo} alt="logo of oranta" className='header-logo'></img>
                            <div className='burger' onClick={handleBurger}>
                                <span></span>
                                <span></span>
                                <span></span>
                        </div>
                        {burgerOpen && (
                            <>
                                <div className='burger-menu'>
                                    <nav className=''>
                                        <ul className="nav-items">
                                            <li onClick={() => handleNavigation('/')}>Home</li>
                                            <li onClick={() => handleNavigation('/science-technology')}>Science & Technology</li>
                                            <li onClick={() => handleNavigation('/collaboration-partners')}>Collaboration Partners</li>
                                            <li onClick={() => handleNavigation('/career')}>Career</li>
                                            <li onClick={() => handleNavigation('/contact')}>Contact</li>
                                            <li>
                                                <img src={UKFlagIcon} alt='icon of the uk flag' className='language-icon' />
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </>
                        )}
                        
                    </>
                )}
                
            </header>
        </>
    )
}