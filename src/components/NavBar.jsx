import CartWidget from "./CartWidget";

function NavBar(props) {

    const { imgBrand } = props;

    return (
        <nav className="navbar">
            <a href="">
                <img src={imgBrand} alt="" />
            </a>
            <ul className="nav-menu">
                <li>
                    <a href="">Detalles</a>
                </li>
                <li>
                    <a href="">Colecciones</a>
                </li>
                <li>
                    <a href="">Género</a>
                </li>
            </ul>


            <CartWidget />


        </nav>
    )
}

export default NavBar;