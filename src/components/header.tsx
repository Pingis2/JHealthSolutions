import '../assets/logo/oranta-logo.png';

export const Header = () => {
    return (
        <>
            <header className='header'>
                <img src="../src/assets/logo/oranta-logo.png" alt="" className='header-logo'></img>
                <nav>
                    <ul className="nav-items">
                        <li>Home</li>
                        <li>Science & Technology</li>
                        <li>Collaboration Partners</li>
                        <li>Career</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}