

const Header = () => {
    return (
        <div className="header">
            <header className="topNav">
                <p className="logo">Agency</p>
                <div className="menu">
                    <div className="navigation">
                        <a href="" className="navigations">Home</a>
                        <a href="" className="navigations">About me</a>
                        <a href="" className="navigations">Work</a>
                        <a href="" className="navigations">Contact</a>
                    </div>
                    <div className="link">
                        <a href=""><img src="search-icon.png" alt="search bar"></img></a>
                        <a href=""><img src="facebook-icon.png" alt="facebook"></img></a>
                    </div>
                </div>
            </header>
        </div>
    )
}


export default Header;