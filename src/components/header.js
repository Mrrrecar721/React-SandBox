import logo from '../item-cucumbers.png'
function header() {
    return (
            <nav className="nav">
                <a href="#"><img className="nav-logo" src={logo} alt=""/></a>
                <div className="flex-container">
                    <div className="nav-links"><a href="#">About</a></div>
                    <div className="nav-links"><a href="#">Services</a></div>
                    <div className="nav-links"><a href="#">Contact</a></div>
                </div>
            </nav>
    )
}

export default header;
