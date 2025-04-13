import FilterBar from "../components/FilterBar";

export default function Header(){

    return(
    <header>
        <nav className="navbar navbar-dark bg-dark px-4 pt-4">
            <span className="navbar-brand mb-0 h1">GameBase</span>

            <FilterBar />

        </nav>
    </header>   
    )
}