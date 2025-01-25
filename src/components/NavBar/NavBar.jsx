import CartWidget from "../CartWidget/CartWidget";

function NavBar(props) {

    const { img } = props;

    return (
        <nav className="navbar">
            <a href="">
                <img src={img} alt="" />
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