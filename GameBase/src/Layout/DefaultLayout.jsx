import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function DefaultLayout(){
    
    
    return(
    <>
    <Header/> 
    <main className="py-5 bg-dark text-light min-vh-100">
        <div className="container my-3">
            <Outlet />
        </div>
    </main>
    <footer></footer>
    

    </>
    )
}