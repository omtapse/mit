import NavbarWrapper from "./Navbar.style";

const Navbar = () =>{

    return(
        <NavbarWrapper>
            <div className="Navbar">
                <div className="logo">
                    <img src="/logo.jpg"/>
                </div>
                <div className="Navigations">
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <a href='/about'><li>About Equilibrium</li></a>
                        <a href='club-info'><li>Club Information</li></a>
                        <a href='/'><li>Membership</li></a>
                        <a href='/contact'><li>Contact</li></a>
                    </ul>
                </div>
            </div>
        </NavbarWrapper>
    )
}

export default Navbar;