import { useNavigate } from 'react-router-dom';
import '../assets/logo/oranta-logo.png';

export const Header = () => {

    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    }

    return (
        <>
            <header className='header'>
                <img src="../src/assets/logo/oranta-logo.png" alt="logo of oranta" className='header-logo'></img>
                <nav>
                    <ul className="nav-items">
                        <li onClick={() => handleNavigation('/')}>Home</li>
                        <li onClick={() => handleNavigation('/science-technology')}>Science & Technology</li>
                        <li onClick={() => handleNavigation('/collaboration-partners')}>Collaboration Partners</li>
                        <li onClick={() => handleNavigation('/career')}>Career</li>
                        <li onClick={() => handleNavigation('/contact')}>Contact</li>
                        <li>
                            <img src='../src/assets/icons/uk-flag-icon.png' alt='icon of the uk flag' className='language-icon' />
                        </li>
                    </ul>
                </nav>
                
            </header>
        </>
    )
}