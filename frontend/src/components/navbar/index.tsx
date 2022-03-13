import {ReactComponent as GithubIcon} from 'assets/img/Github.svg'

function NavBar() {

    return (
        <header>
            <nav className="container">
                <div className="movieapp-nav-content">
                    <h1>Movies App</h1>
                    <a href="https://github.com/luistsiufpr" target="_blank" rel="noreferrer">
                        <div className="movieapp-contact-container">
                            <GithubIcon />
                            <p className="movieapp-contact-link">/luistsiufpr</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )

}
export default NavBar;
