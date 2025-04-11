import { Link } from "react-router-dom";

export default function Header(){
     return(
    <header>
        <nav className="navbar navbar-dark bg-dark px-4 py-2">
            <span className="navbar-brand mb-0 h1">GameBase</span>

            <form className="form-inline">
                <input className="form-control bg-secondary text-light border-0" type="search" placeholder="Search" />
            </form>
        </nav>
    </header>   
    )
}