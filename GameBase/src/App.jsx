import {BrowserRouter, Routes, Route} from "react-router-dom";

import DefaultLayout from './Layout/DefaultLayout';
import Homepage from './pages/Homepage';
import { GenresProvider } from "./context/GenresContext";
import { PlatformsProvider } from "./context/PlatformsContext";
import { GamesProvider } from "./context/GamesContext";
import SingleGameCard from "./components/SingleGameCard";
import Filtered from "./pages/Filtered";


function App() {


  return (
    <BrowserRouter>
      <GamesProvider>
      <GenresProvider>
      
      <PlatformsProvider>
      
        <Routes>
          <Route element={<DefaultLayout/>}>

            <Route index element={<Homepage/>}/>
            <Route path="/games/:id" element={<SingleGameCard/>}/>
            <Route path="/:path/:id/games" element={<Filtered/>}/>
            <Route path="/games" element={<Filtered/>}/>


          </Route>
        </Routes>
      
      </PlatformsProvider>
      </GenresProvider>
      </GamesProvider>
    </BrowserRouter>
  )
}

export default App
