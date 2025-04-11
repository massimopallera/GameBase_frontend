import { Link } from "react-router-dom";

export default function Header(){
     return(
    <header>
        <nav className="navbar navbar-dark bg-dark px-4 py-2">
            <span className="navbar-brand mb-0 h1">GameBase</span>

            <div className="d-flex gap-4">

                <form className="form-inline">
                    <input className="form-control bg-secondary text-light border-0" type="search" placeholder="Search" />
                </form>
                <button onClick={() => window.location.href = 'http://localhost:8080'} className="btn btn-secondary  text-light border-0">
                    Login
                </button>
            </div>
        </nav>
    </header>   
    )
}