import img1 from "../../assets/img/facebook-icon.png"
import img2 from "../../assets/img/search-icon.png"

const Header = () => {
    return (
        <div className="header">
            <header className="topNav">
                <p className="logo">Agency</p>
                <div className="menu">
                        <a href="" className="navigations">Home</a>
                        <a href="" className="navigations">About me</a>
                        <a href="" className="navigations">Work</a>
                        <a href="" className="navigations">Contact</a>
                        <div className="navigations">
                            <a className="navigations" href=""><img className="icons" src={img1} alt="search bar"/></a>
                            <a className="navigations" href=""><img className="icons" src={img2} alt="facebook"/></a>
                        </div>
                </div>
            </header>
            <main>
                <div>
                    <h1 className="f-line">THINK</h1>
                    <h2 className="s-line">OUTSIDE</h2>
                    <h3 className="t-line">OF THE BOX</h3>
                </div>
                <button>READ MORE</button>
            </main>
        </div>
    )
}


export default Header;