import "./Navbar.css";

function Navbar() {
    return (
        <nav classname="navbar">
            <h2 classname="logo">Jesima Begam</h2>
            <ul classname="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
        </nav>
    );
}
export default Navbar;